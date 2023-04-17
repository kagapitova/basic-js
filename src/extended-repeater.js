const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  let sep = options.hasOwnProperty('separator') ? options.separator : '+';
  let add = options.hasOwnProperty('addition') ? String(options.addition) : '';
  let sepAdd = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  let repTimes = typeof options.repeatTimes === "number" ? options.repeatTimes : 1;
  let addRepTimes = typeof options.additionRepeatTimes === "number" ? options.additionRepeatTimes : 1;
  function repeatElement(str, repeateTimes) {
    return [].concat(...Array(repeateTimes).fill(str));
  }
  let addStr = repeatElement(add, addRepTimes).join(sepAdd);
  return repeatElement(String(str) + addStr, repTimes).join(sep);
}

module.exports = {
  repeater
};
