const readProfiles = require('./readProfiles');

(async() => {


  const profiles = await readProfiles()

  const locations = profiles
  .map(({ profile }) => {
    let headline = profile.location.toLowerCase().trim()

    return headline //.replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, '')
  })
  .sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })

  var counts = {};
  locations.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  const xx = Object.keys(counts).map((key) => ({ word: key, count: counts[key]}))
    .sort((a, b) => {
      if(a.count > b.count) { return -1; }
      if(a.count < b.count) { return 1; }
      return 0;
    })

  console.log(xx)



})()
