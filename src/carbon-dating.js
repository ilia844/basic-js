const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) != 'string' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) > 15 || 
    parseFloat(sampleActivity) <= 0) return false;
  const k = Math.log(2) / HALF_LIFE_PERIOD;
  let age = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
  age = Math.ceil(age);
  return age;
};
