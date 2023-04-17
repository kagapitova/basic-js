const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n) {
  let nArr = n.toString().split('');
  let maxNum = 0;
  for(let i=0;i<nArr.length;i++){
    let newArr = [...nArr];
    newArr.splice(i,1)
    let newN = parseInt(newArr.join(''),10)
    maxNum = Math.max(maxNum,newN)
  }
  return maxNum
}

module.exports = {
  deleteDigit
};
