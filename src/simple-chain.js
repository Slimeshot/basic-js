const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
  arr: [],

  getLength() {
    this.arr.push(` ( ${this.arr.length} ) `);
    return this;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  
  removeLink(position) {
    if (position > 0 && position < this.arr.length) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw 'Error';
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    let result = [];
    result = this.arr.join('~~');
    this.arr = [];
    return result
  }
};

module.exports = chainMaker;
