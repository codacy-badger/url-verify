import axios from 'axios';

const checkSiteSafety = (url, obj) => new Promise((resolve, reject) => {
  try {
    if (obj.apiKey.trim().length === 0) {
      throw new Error('apiKey is required');
    }
    if (obj.appName.trim().length === 0) {
      throw new Error('appName is required');
    }
    if (obj.appVersion.trim().length === 0) {
      throw new Error('appVersion is required');
    }
    const reqBody = {
      client: {
        clientId: obj.appName,
        clientVersion: obj.appVersion
      },
      threatInfo: {
        threatTypes: [
          'MALWARE',
          'SOCIAL_ENGINEERING',
          'UNWANTED_SOFTWARE',
          'POTENTIALLY_HARMFUL_APPLICATION',
          'THREAT_TYPE_UNSPECIFIED'
        ],
        platformTypes: ['ANY_PLATFORM'],
        threatEntryTypes: [
          'URL',
          'EXECUTABLE',
          'THREAT_ENTRY_TYPE_UNSPECIFIED'
        ],
        threatEntries: [{ url }]
      }
    };
    const googleSafeUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${
      obj.apiKey
    }`;
    const headers = {
      'Content-Type': 'application/json'
    };
    axios.post(googleSafeUrl, reqBody, { headers }).then((resBody) => {
      const matchingUrls = resBody.data.hasOwnProperty('matches')
        ? resBody.data.matches.map(m => m.threat.url)
        : [];
      resolve(!matchingUrls.includes(url));
    });
  } catch (err) {
    reject(err);
  }
});


export default checkSiteSafety;
