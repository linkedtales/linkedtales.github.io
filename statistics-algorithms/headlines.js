const readProfiles = require('./readProfiles');




(async() => {


  const profiles = await readProfiles()
  console.log(profiles.length)
  const positions = profiles
  .map(({ profile }) => {
    let headline = profile.headline.toLowerCase().trim()
    const at = headline.indexOf(' at ')
    const arroba = headline.indexOf('@')

    if(at != -1)  {
      headline =  headline.substring(0, at)
    }
    if(arroba != -1){
      headline =  headline.substring(0, arroba)
    }

    //if(headline.split(' ').length == 3)
      //console.log(headline)

    //if(headline.indexOf("staff") > -1)
      //return headline.replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, '').split(' ')
    return headline.split(' ').length

  })
.reduce((acc, x) => {
    return acc.concat(x)
  }, [])
  .sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })

  //console.log(positions)

  var counts = {};
  positions.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  const xx = Object.keys(counts).map((key) => ({ word: key, count: counts[key]}))
    .sort((a, b) => {
      if(a.count > b.count) { return -1; }
      if(a.count < b.count) { return 1; }
      return 0;
    })

  //console.log(xx)

  const content = xx.reduce((acc, x) => {
    return acc = acc + `${x.word};${x.count}\n`
  }, '')

  const fs = require('fs')
  fs.writeFileSync('./oi.txt', content)
//  console.log(content)



})()
