const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const separator = options.separator === undefined ? '+' : options.separator;
  const addition = options.addition === null ? 'null' : options.addition;
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  let additionArr = [];
  for (let i = 1; i <= additionRepeatTimes; i++) {
    additionArr.push(addition)
  } 
  const strToRepeat = `${str}${additionArr.join(additionSeparator)}`;

  let resultArr = [];
  for (let i = 1; i <= repeatTimes; i++) {
    resultArr.push(strToRepeat);
  }
  return resultArr.join(separator);
};
  