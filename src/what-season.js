const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date){
    return "Unable to determine the time of year!";
  }

  if (Object.prototype.toString.call(date) !== '[object Date]'){
    throw Error;
  }

  let month = date.getMonth();
  
  if (month < 2 || month === 11) {
    return "winter";
  } else if (month > 1 && month < 5) {
    return "spring";
  } else if (month > 4 && month < 8) {
    return "summer";
  } else if (month > 7 && month < 11) {
    return "fall";
  }
};

