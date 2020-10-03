const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if (!matrix) return 0;
  if (matrix.length <= 0) {
    return 0;
  } else {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; i < matrix[i].length; j++) {
        if (matrix[i][j] === '^^') {
          count++;
        }
      }
    }
    return count;
  } 
};
