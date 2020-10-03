const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members === null || members === undefined) return false;
  let letterArr = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      letterArr.push(members[i].trim()[0].toUpperCase());
    }
  }
  if (letterArr.length === 0) return false;
  letterArr.sort();
  return letterArr.join('');
};
