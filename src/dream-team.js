const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

  let arrResult = [];

  if (Array.isArray(members)) {
    members.forEach(item => {
      if ((typeof item) === 'string') {
        item = item.trim()
        arrResult.push(item[0].toUpperCase())
      } 
    });
    return arrResult.sort().join('');
  } else {
    return false;
  }
  
  
};
