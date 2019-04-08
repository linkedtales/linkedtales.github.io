const readProfiles = require('./readProfiles');

(async() => {


  const profiles = await readProfiles()

  const recs = profiles.filter(({ recommendations }) => {
    if(recommendations.receivedCount == 0)
      return true

  })

  const words = recs.reduce((acc, { skills }) => {
    skills.forEach(x => {
      if(x.count){
        if(!acc[x.title]) {
            acc[x.title] = 0
        }
       acc[x.title] += parseInt(x.count)
      }

    })

    return acc
  }, {})






  var counts = {};
  //words.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  const xx = Object.keys(words).map((key) => ({ word: key, count: words[key]}))
    .sort((a, b) => {
      if(a.count > b.count) { return -1; }
      if(a.count < b.count) { return 1; }
      return 0;
    })

  console.log(xx)

  const content = xx.reduce((acc, x) => {
    return acc = acc + `${x.word};${x.count}\n`
  }, '')

  const fs = require('fs')
  fs.writeFileSync('./oi.txt', content)



})()
