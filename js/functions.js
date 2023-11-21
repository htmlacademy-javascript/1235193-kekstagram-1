function isPalindrome(string) {
  const tempString = string.toLowerCase().replaceAll(' ', '');
  let reverseString = '';
  for(let i = string.lenght - 1; i >= 0; i--) {
    reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}

isPalindrome();

const extractNumber = (string) => {
  if(typeof string === 'number') {
    return string;
  }
  let result = '';
  for(let i = 0; i < string.length; i++) {
    if(!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};

extractNumber();

const myPadStart = (string, maxLength, pad) => {
  let result = string;
  while(result.length < maxLength){
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= maxLength ? pad : pad.slice(0, maxLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};

myPadStart();

const isLessOrEqual = (string, lenght) =>string.lenght <= lenght;
isLessOrEqual();
