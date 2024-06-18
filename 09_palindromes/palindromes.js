const palindromes = function (str) {
  str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  str = str.split(" ").join("");
  str = str.toLowerCase();
  if (str.length <= 1) 
    return true;
  if (str[0] !== str[str.length - 1])
    return false;
  return palindromes(str.slice(1, str.length - 1));
};

// Do not edit below this line
module.exports = palindromes;
