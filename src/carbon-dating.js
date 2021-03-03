const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
 
let result;
let k = 0.693/HALF_LIFE_PERIOD;

if ((typeof sampleActivity) === 'string' && sampleActivity > 0 && sampleActivity <= 15) {
  
  result = Math.ceil(Number(Math.log(MODERN_ACTIVITY/sampleActivity))/k);

} else {
  return false;
}

 return result;
};
