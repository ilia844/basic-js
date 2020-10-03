const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix) return 0;
  if (matrix.length <= 0) {
    return 0;
  } else {
    let count = 0;
    for (let subArr of matrix) {
      for (let item of subArr) {
        if (item === '^^') {
          count++;
        }
      }
    }
    return count;
  } 
};
