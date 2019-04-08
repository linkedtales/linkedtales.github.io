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

    return acc.concat(flatten(p.positions.map(x => {

      if(x.description)
        return x.description.replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, ' ').split(' ')
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

  console.log(xx)



})()
