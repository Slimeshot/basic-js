const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
    let addit = '';
    let arrAdit = [];

    if (typeof str !== 'string') {
      str = String(str);
    };
    if (typeof options.addition !== 'string') {
      options.addition = String(options.addition);
    };
    if (options.addition === 'undefined') {
        options.addition = '';
    }
    if (options.repeatTimes === undefined) {
        options.repeatTimes = 1;
    }
    
    if (options.additionRepeatTimes === undefined) {
        options.additionRepeatTimes = 1;
    }
    if (options.separator === undefined) {
      options.separator = '+';
    };
    if (options.additionSeparator === undefined) {
      options.additionSeparator = '|';
    };


  for (let j = 0; j < options.additionRepeatTimes; j++) {
      arrAdit.push(options.addition);
  }
  addit = arrAdit.join(options.additionSeparator);

  
  str = str + addit;


  for (let i = 0; i < options.repeatTimes; i++) {
      arr.push(str);
  }
  str = arr.join(options.separator);

  return str;
};
  