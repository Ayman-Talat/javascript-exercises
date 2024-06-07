const removeFromArray = function(array, ...items) {
  let resultArr = []
  
  for (let i = 0; i < array.length; i++) {
    let remove = false;
    for (let j = 0; j < items.length; j++) {
      if (array[i] === items[j]) {
        remove = true;
        break;
      }
    }
    if (!remove) resultArr.push(array[i]);
  }
  return resultArr;
};

// Do not edit below this line
module.exports = removeFromArray;
