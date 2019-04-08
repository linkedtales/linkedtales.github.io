const readProfiles = require('./readProfiles');

function flatten(arr){

  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

(async() => {


  const profiles = await readProfiles()

  const words = profiles.reduce((acc, { recommendations }) => {

    if(recommendations.received.length > 0)
      return acc.concat(flatten(
        recommendations.received.map((text) =>
          text.text
            .replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, '')
            .split(' '))))

      return acc
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



})()
