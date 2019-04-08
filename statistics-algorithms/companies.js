const topCompanies = ["twitter","spotify", "uber", "booking", "airbnb", "netflix", "zoom" ,"microsoft", "amazon", "facebook", "linkedin", "google", "ibm", "cisco", "apple", "adobe", "oracle", "yahoo", "intel", "hewlett"]


const readProfiles = require('./readProfiles');

(async() => {


  const profiles = await readProfiles({ topCompany: 5 })

  // const companies = profiles
  // .reduce((acc, { positions }) => {
  //   const pos = positions.map((p ,i) => {
  //     if(i > 0)
  //       return  (p.roles) ? p.title.toLowerCase() : p.companyName.toLowerCase()
  //   })
  //
  //
  //     return acc.concat(pos)
  //
  // }, [])

  const getMonths = (date) => {
    if(date){
      if(date.indexOf('yr') > -1){
        const year = date.split('yr')[0].trim()
        const month = date.split('yr')[1].replace('mos', '').replace('mo', '').replace('s', '').trim()
        const months = year * 12 + (month.length > 0 ? parseInt(month) : 0)
        return months
      }

      const month = date.replace('mos', '').replace('mo', '').replace('s', '').trim()
      return month
    }
  }

  const companies = profiles
  .reduce((acc, { profile, positions }) => {
    // const position = positions.map(x => {
    //   const title = (x.roles) ? x.title.toLowerCase() : x.companyName.toLowerCase()
    //    // if (!topCompanies.find(y => title.includes(y))){
    //    //   return x
    //    // }
    //    // if(title.includes("google")){
    //    //   return undefined
    //    // }
    //   return title
    // })
    // console.log(position)
     //if(positions.length > 1){
        // return acc.concat(positions.map(x => x.date2))
    //}
    //return acc
    //return acc.concat(positions.length)

    // return acc.concat(positions.reduce((acc2, position) => {
    //   const title = (position.roles) ? position.title.toLowerCase() : position.companyName.toLowerCase()
    //   //if(title.includes('zoom')){
    //     return acc2.concat(position.date2)
    //   //}
    //
    //   return acc2
    // }, []))
      // if(position){
      //   return acc.concat(position)
      // }
      // if(position.includes(undefined)){
      //     return acc + 1
      // }
      //
      // return acc



      positions.forEach((x, i) => {
        const months = getMonths(x.date2)


        if(months){
          if(!acc[i]) acc[i] = []
          if(!Number.isNaN(parseInt(months)))
          {
              //acc[i].push(parseInt(months))
              if(!acc[profile.name]) acc[profile.name] = {exp: []}
              const c = (x.companyName || x.title).toLowerCase()


              const obj = acc[profile.name].exp.find((x) => {
                //console.log(x.name == c, x.name + " " + c)
                 return x.name == c
               })

              if(obj){
                obj.mo += parseInt(months)
              } else {
                acc[profile.name].exp.push({
                  name: c,
                  mo: parseInt(months)
                })
              }
          }

        }
      })

      return acc;
  }, {})
//  console.log("companies",companies)
  //console.log(companies)

  // Object.keys(companies).forEach((key) =>{
  //   const vls = companies[key]
  //   const lgt = vls.length
  //   const sum = vls.reduce((a, b) => a + b)
  //   console.log(key + ";" + (sum / lgt))
  // })
  //



  // const dates = companies.reduce((acc, date) => {
  //   if(acc[date]){
  //     acc[date] += 1
  //   }else{
  //     acc[date] = 1
  //   }
  //
  //   return acc
  //
  // }, {})

  //console.log(dates)
  // var counts = {};
  // companies.forEach((x) => { counts[x] = (counts[x] || 0)+1; });
  // const xx = Object.keys(counts).map((key) => ({ word: key, count: counts[key]}))
  //   .sort((a, b) => {
  //     if(a.count > b.count) { return -1; }
  //     if(a.count < b.count) { return 1; }
  //     return 0;
  //   })
  //   //console.log(xx)
  const content = Object.keys(companies).reduce((acc, key) => {
    const a = companies[key]

    if(!Array.isArray(a)){
      const { exp } = a
      exp.forEach(({name, mo}) => {
        topCompanies.forEach((c) => {
          if(name.includes(c)) {
            if(!acc[c]) acc[c] = []
            acc[c].push(mo)
          }
        })
      })
    }


    return acc
  },{})

  const topCompaniesx = {
    "twitter": 0,
    "spotify" : 0,
     "uber" : 0,
     "booking" : 0,
     "airbnb" : 0,
      "netflix" : 0,
       "zoom"  : 0,
       "microsoft" : 0,
        "amazon" : 0,
        "facebook" : 0,
        "linkedin" : 0,
        "google" : 0,
        "ibm" : 0,
        "cisco" : 0,
        "apple" : 0,
        "adobe" : 0,
        "oracle" : 0,
        "yahoo" : 0,
        "intel" : 0,
        "hewlett": 0}

  const content4 = Object.keys(companies).reduce((acc, key) => {
    const a = companies[key]

    if(!Array.isArray(a)){
      const { exp } = a
      exp.forEach(({name, mo}) => {
        topCompanies.forEach((c) => {
          if(name.includes(c)) {
            topCompaniesx[c] += 1
            if(!acc[c]) acc[c] = []
            acc[c].push(mo)
          }
        })
      })
    }


    return acc
  },{})

//  console.log(JSON.stringify(topCompaniesx, undefined, 2))


  const content2 = Object.keys(content).reduce((acc, c) => {
    const mos = content[c]
    const total = mos.reduce((a,b) => a + b)
    const avg = total / mos.length

    const more24 = mos.reduce((acc2, x) =>  x > 24 ? acc2.concat(x) : acc2, [])

    const avg24 = more24.reduce((a, b) => a + b) / more24.length
    //const pL12 = less12.length / mos.length * 100

    acc += c + ";" + avg + ";" + avg24 + "\n"
    return acc
  }, "")
 //let content = JSON.stringify(companies, undefined, 5);
 // Object.keys(companies).forEach((key) => {
 //   const obj = companies[key]
 //   obj.forEach((o) => {
 //     content += key + ";" + o + "\n"
 //   })
 // })
  //console.log(xx)

  // const content3 = Object.keys(companies).reduce((acc, key) => {
  //   const a = companies[key]
  //
  //   if(!Array.isArray(a)){
  //     const { exp } = a
  //     const exp2 = exp.map(x => x.name)
  //     const tem = exp2.filter(x => {
  //       //const temtem = topCompanies.find(y => x.includes(y))
  //
  //       return x
  //     })
  //
  //     acc.push(tem.length)
  //     // exp.forEach(({name, mo}) => {
  //     //   topCompanies.forEach((c) => {
  //     //     if(name.includes(c)) {
  //     //       if(!acc[c]) acc[c] = []
  //     //       acc[c].push(mo)
  //     //     }
  //     //   })
  //     // })
  //   }
  //
  //
  //   return acc
  // },[])




  const fs = require('fs')
  fs.writeFileSync('./oi.txt', content2)
  //console.log(content)



})()
