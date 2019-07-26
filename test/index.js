import { assert } from 'chai';
import { checkAdultSite, urlExists } from '../src';
// import { ADULT, API_KEY } from './constants';

const sites = {
  google: 'https://www.google.com',
  adult: ADULT,
  notUrl: 'https://www.example.com/not'
};

// const obj = {
//   apiKey: API_KEY,
//   appName: 'test',
//   appVersion: '1.0.0'
// };

describe('**** url-verify test ****', () => {
  // checkAdultSite
  it('should test checkAdultSite function', (done) => {
    checkAdultSite(sites.google)
      .then((isAdult) => {
        const expectedVal = false;
        assert(isAdult === expectedVal, `should return ${expectedVal}`);
        done();
      }).catch(done);
  });

  it('should test checkAdultSite function', (done) => {
    checkAdultSite(sites.adult)
      .then((isAdult) => {
        const expectedVal = true;
        assert(isAdult === expectedVal, `should return ${expectedVal}`);
        done();
      }).catch(done);
  });

  // check site safety
  // it('should test checkSiteSafety function', (done) => {
  //   checkSiteSafety(sites.google, obj)
  //     .then((isSafe) => {
  //       const expectedVal = true;
  //       assert(isSafe === expectedVal, `should return ${expectedVal}`);
  //       done();
  //     }).catch(done);
  // });

  // check urlExists
  it('should test urlExists function', (done) => {
    urlExists(sites.google)
      .then((exists) => {
        const expectedVal = true;
        assert(exists === expectedVal, `should return ${expectedVal}`);
        done();
      }).catch(done);
  });

  it('should test urlExists function', (done) => {
    urlExists(sites.notUrl)
      .then((exists) => {
        const expectedVal = false;
        assert(exists === expectedVal, `should return ${expectedVal}`);
        done();
      }).catch(done);
  });
});
