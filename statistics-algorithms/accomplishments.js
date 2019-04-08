const readProfiles = require('./readProfiles');

function flatten(arr){

  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

(async() => {


  const profiles = await readProfiles()

  const words = profiles.reduce((acc, { accomplishments }) => {

    return acc.concat(flatten(accomplishments.map(x => x.items)))
  }, [])

  var counts = {};
  words.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  const xx = Object.keys(counts).map((key) => ({ word: key, count: counts[key]}))
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
