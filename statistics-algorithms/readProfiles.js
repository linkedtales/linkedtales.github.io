const fs = require('fs')

const top1 = ["twitter","spotify", "uber", "booking", "airbnb", "netflix", "zoom" ]

const top2 = ["microsoft", "amazon", "facebook", "linkedin", "google"]

const top3 = ["ibm", "cisco", "apple", "adobe", "oracle", "yahoo", "intel", "hewlett-packard"]

function flatten(arr){

  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}


module.exports = ({ topCompany } = {}) => new Promise((r) => {
  fs.readdir('../crawledProfiles', (err, files) => {
    const xs = files.map(file => new Promise((resolve, reject) => {
      fs.readFile('../crawledProfiles/' + file, 'utf8', function (err, data) {
          obj = JSON.parse(data);
          resolve(obj)
      })
    }))

    Promise.all(xs)
      .then((profiles) => {
        if(topCompany){
          const filteredProfiles = profiles.filter((profile) => {
            const positionTitles = flatten(profile.positions.map(x => {
              if(!x.companyName)
              {
                return x.title.replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, ' ').toLowerCase().split(' ')
              }

              return  x.companyName.replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, ' ').toLowerCase().split(' ')
            }))


            if(topCompany === 4){
              return !(positionTitles.find((position) => top1.includes(position)) || positionTitles.find((position) => top2.includes(position)) || positionTitles.find((position) => top3.includes(position)))
            }

            if(topCompany === 5){
              return (positionTitles.find((position) => top1.includes(position)) || positionTitles.find((position) => top2.includes(position)) || positionTitles.find((position) => top3.includes(position)))
            }

            if(topCompany === 1){
              return positionTitles.find((position) => top1.includes(position))
            }

            if(topCompany === 2){
              return positionTitles.find((position) => top2.includes(position))
            }

            if(topCompany === 3){
              return positionTitles.find((position) => top3.includes(position))
            }
          })

          return r(filteredProfiles)
        }

        return r(profiles)
      })
  })
})
