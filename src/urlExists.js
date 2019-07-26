import https from 'https';
import url from 'url';

const urlExist = siteUrl => new Promise((resolve, reject) => {
  try {
    const parsedUrl = url.parse(siteUrl);
    const reformedUrl = `https://${parsedUrl.hostname}${parsedUrl.path}`;
    https
      .get(reformedUrl, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .on('error', (err) => {
        reject(err);
      });
  } catch (err) {
    reject(err);
  }
});

export default urlExist;
