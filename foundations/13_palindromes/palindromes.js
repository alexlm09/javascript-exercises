const palindromes = function (str) {
  const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const cleanedStr = str
                        .toLowerCase()
                        .split('')
                        .filter(letter => alphanumerical.includes(letter))
                        .join('');

  const strL = cleanedStr.length;
  const midL = Math.floor(strL/2);
  
  for (let i = 0; i <= midL; i++) {
    if (cleanedStr[i] !== cleanedStr[strL-i-1]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
