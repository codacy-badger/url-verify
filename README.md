# url-verify

[![Build Status](https://travis-ci.org/sudonitesh/url-verify.svg?branch=master)](https://travis-ci.org/sudonitesh/url-verify) [![dependencies Status](https://david-dm.org/sudonitesh/url-verify/status.svg)](https://david-dm.org/sudonitesh/url-verify) [![devDependencies Status](https://david-dm.org/sudonitesh/url-verify/dev-status.svg)](https://david-dm.org/sudonitesh/url-verify?type=dev) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This is a module to test a URL for

* Adult contents
* Malicious contents
* Live Site

___

## How to use

### Check URL for adult contents

```javascript
const { checkAdultSite } = require('url-verify');

const siteUrl = 'https://www.google.com';

checkAdultSite(siteUrl).then(isAdult  => {
  console.log(`${siteUrl} is Adult Site -> ${isAdult}`); //BOOLEAN (true/false)
})
```

### Check whether URL is malicious

* First Create an app at [Google Developer Console](https://console.developers.google.com/)
* Enable `Safe Browsing API` and get `API Key` from `Credentials`

```javascript
const { checkSiteSafety } = require('url-verify');

const siteUrl = 'https://www.google.com';
const  obj  = {
  apiKey: '', // API key you got (mandatory)
  appName: 'test', //your app name (mandatory)
  appVersion: '1.0.0' //your app version (mandatory)
};

checkSiteSafety(siteUrl, obj).then(isSafe  => {
  console.log(`${siteUrl} is Safe -> ${isSafe}`); //BOOLEAN (true/false)
})
```

### Check whether URL is working

```javascript
const { urlExists } = require('url-verify');

const siteUrl = 'https://www.google.com';

urlExists(siteUrl).then(exists  => {
  console.log(`${siteUrl} is live -> ${exists}`); //BOOLEAN (true/false)
})
```

## License

[MIT](https://opensource.org/licenses/MIT) © [Nitesh Tosniwal](https://github.com/sudonitesh/)
