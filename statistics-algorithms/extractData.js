const fs = require('fs');

const profiles = []

const readProfiles = () => 


const displayData = async() => {
  const profiles = await x()
  const locations = profiles.map(({ profile: { location } }) => {
    const normalizedLocation = locationMap.find(x => Object.keys(x)[0] == location)
    if(normalizedLocation) {
      location = Object.values(normalizedLocation)[0]
    } else {
      location = 'United States'
    }

    return location
  }).sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })

  const headlines = profiles.map(p => {
    const at = p.profile.headline.indexOf(' at ')
    const arroba = p.profile.headline.indexOf('@')

    if(at != -1)  {
      p.profile.headline =  p.profile.headline.substring(0, at)
    }
    if(arroba != -1){
      p.profile.headline =  p.profile.headline.substring(0, arroba)
    }

    return  p.profile.headline
  }).sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })

  const positions = profiles.map(({ positions }) => {


    return positions.map((x) => {
      return x.title.replace('Nome da empresa\n', '')
    })
  }).reduce((acc, x) => acc.concat(x) , []).sort((a, b) => {
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
  })



  const words = profiles.reduce((acc, { profile: { summary }}) => {
    if(summary){
      const a = summary.toLowerCase()
        .replace(/[,|.|\n|(|)|"|'|:|“|”|/]/g, '')
        .split(' ')

      acc = acc.concat(a)
    }

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

  const uniq = [...new Set(headlines)]
  console.log(xx)
}

displayData()

const locationMap = [
  { 'Amesterdã e Região, Holanda' : 'Netherlands' },
  { 'Cazaquistão' : 'Kazakhstan' },
  { 'Reino Unido' : 'United Kingdom' },
]
