const { checkAdultSite, checkSiteSafety, urlExists } = require('../lib')

const sites = {
  google: 'https://www.google.com'
}

const obj = {
  apiKey: '',
  appName: 'test',
  appVersion: '1.0.0'
}

/*
 * Check If it is a Adult Site
 */

checkAdultSite(sites.google).then(isAdult => {
  console.log(`${sites.google} -> ${isAdult}`)
})

/*
 * Check If Site is safe.
 */

checkSiteSafety(sites.google, obj).then(isSafe => {
  console.log('safe', isSafe)
})

/*
 * Check if site is live and url exists
 */

urlExists(sites.google)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log('not working')
  })
