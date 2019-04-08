const readProfiles = require('./readProfiles');

(async() => {


  const profiles = await readProfiles({ topCompany: 4  })

  const educations = profiles.reduce((acc, a) => {

        const n = a.educations.reduce((acc2, edu) => {
          if(edu.date2 && edu.date1){
            return  acc2 + (edu.date2 - edu.date1)
          }
          return acc2
        },0)


        if(acc[n])
          acc[n] += 1
        else
          acc[n] = 1

    return acc
  }, {})

  console.log(educations)
  var counts = {};
  educations.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
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
  //console.log(content)



})()
