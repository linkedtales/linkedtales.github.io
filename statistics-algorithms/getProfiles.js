const readProfiles = require('./readProfiles');

const filterPerCompanies = (profiles, companyNames) => {
  const filteredProfiles = profiles
    .filter(({ positions }) => {
      const hasCompanyName = positions.find((position) => {
        const findCompanyName = position.roles ? position.title.toLowerCase() : position.companyName.toLowerCase()
        const hasCompanyNameIncluded = companyNames
          .find((companyName) => {
            return findCompanyName.includes(companyName)
          })

        return hasCompanyNameIncluded
      })

      return hasCompanyName
    })

  return filteredProfiles
}

const filterPerHeadline = (profiles, headlines) => {
  const filteredProfiles = profiles
    .filter(({ profile }) => {
          return headlines
            .find((headline) => profile.headline.toLowerCase().includes(headline))
      })


  return filteredProfiles
}

module.exports = async(where) => {
//const getProfiles = async(where) => {
  const profiles = await readProfiles()

  const { companyNames, headlines } = where
  if(companyNames){
    return filterPerCompanies(profiles, companyNames)
  }

  if(headlines) {
    return filterPerHeadline(profiles, headlines)
  }

  return profiles

}


//
// getProfiles({ headlines: ['google'] })
//   .then(profiles => console.log("profiles", JSON.stringify(profiles, undefined, 2)))
