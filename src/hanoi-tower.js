const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsSpeedInSeconds = turnsSpeed / 60 / 60;
  let rez = {};
  rez.turns = 2 ** disksNumber - 1;
  rez.seconds = Math.floor(rez.turns / turnsSpeedInSeconds);
  return rez;
};
