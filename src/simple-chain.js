const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position.toString().includes('.') || position < 0 || position >= this.getLength()) {
      this.result = [];
      throw new Error();
    }
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let rez = this.result;
    this.result = [];
    return rez.join('~~');
  }
};

module.exports = chainMaker;
