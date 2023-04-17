const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsObj = {};

  for (let i =0;i<domains.length; i++) {
    let domain = domains[i];
    const subdomains = domain.split('.').reverse();
    let currentDomain = '';

    for (let j=0;j< subdomains.length;j++){
      currentDomain += '.' + subdomains[j];

      if (dnsObj.hasOwnProperty(currentDomain)) {
        dnsObj[currentDomain]++;
      } else {
        dnsObj[currentDomain] = 1;
      }
    }
  }

  return dnsObj;
}

module.exports = {
  getDNSStats
};
