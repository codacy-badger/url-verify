import nslookup from 'nslookup';

const IPs = [/67\.215\.65.\d{3}/gi, /146\.112\.61\.\d{3}/gi];

const checkDns = ip => IPs.some(regexp => regexp.test(ip));

const checkAdultSite = domain => new Promise((resolve, reject) => {
  nslookup(domain)
    .server('208.67.222.123')
    .type('a')
    .timeout(10000)
    .end((err, address) => {
      if (err) reject(err);
      resolve(checkDns(address[0]));
    });
});


export default checkAdultSite;
