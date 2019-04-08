const readProfiles = require('./readProfiles');

(async() => {


  const profiles = await readProfiles()

  const words1 = profiles.filter(({ recommendations }) => {
    if(recommendations.receivedCount > 10)
      return true
  }, [])

  const words = words1.reduce((acc, { recommendations }) => {
    return acc.concat(recommendations.given.reduce((acc2, recommendation) => {
      return recommendation.text.toLowerCase().replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, '').split(' ')
    }, []))
  }, [])
  //console.log(words)
  var counts = {};
  words.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  const xx = Object.keys(counts).map((key) => ({ word: key, count: counts[key]}))
    .sort((a, b) => {
      if(a.count > b.count) { return -1; }
      if(a.count < b.count) { return 1; }
      return 0;
    })

//  console.log(xx)

  const content = xx.reduce((acc, x) => {
    return acc = acc + `${x.word};${x.count}\n`
  }, '')
  //console.log(xx)
  const fs = require('fs')
  fs.writeFileSync('./oi.txt', content)



})()
