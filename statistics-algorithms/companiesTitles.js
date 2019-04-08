const readProfiles = require('./readProfiles');

function flatten(arr){

  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

(async() => {


  const profiles = await readProfiles()

  const companies = profiles
  .reduce((acc, p) => {

    return acc.concat(flatten(p.positions.map((x, i) => {
      // if(x.roles){
      //   return x.roles.map(y =>
      //     y.companyName.replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, ' ').split(' ')
      //   )
      // }
      if(i > 1){
        if(!x.companyName){

          return x.title.toLowerCase().replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, ' ').split(' ')
        }
        console.log(x)
        return x.companyName.toLowerCase().replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, ' ').split(' ')
      }

    })))

  }, [])
  .sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })

  var counts = {};
  companies.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  const xx = Object.keys(counts).map((key) => ({ word: key, count: counts[key]}))
    .sort((a, b) => {
      if(a.count > b.count) { return -1; }
      if(a.count < b.count) { return 1; }
      return 0;
    })

    const content = xx.reduce((acc, x) => {
      return acc = acc + `${x.word};${x.count}\n`
    }, '')

  const fs = require('fs')
  fs.writeFileSync('./oi.txt', content)


})()
