//определяет, является ли слово палиндромом

function isPalindrome(string) {
  const tempString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = tempString.length - 1; i >= 0; i--) {
   reverseString += tempString.at(i);
  }
  return tempString === reverseString;
}

isPalindrome('шалаш');
isPalindrome('А роза упала на лапу Азора');


//принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
const extractNumber = (string) => {
  if (typeof string === 'number') {
    return string;
  }
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {

      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};


extractNumber('1 кефир, 0.5 батона');

//принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и возвращает исходную строку, дополненную указанными символами до заданной длины. Символы добавляются в начало строки. Если исходная строка превышает заданную длину, она не должна обрезаться. Если «добивка» слишком длинная, она обрезается с конца.
const myPadStart = (string, maxLength, pad) => {
  let result = string;
  while (result.length < maxLength) {
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= maxLength ? pad : pad.slice(0, maxLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};


myPadStart('q', 4, 'we');

//проверка длины строки. Принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее
const isLessOrEqual = (string, lenght) => string.length <= lenght;
isLessOrEqual('проверяемая строка', 20);

//ищет сумму всех натуральных чисел, которые кратны 3 или 5
const getSum = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

getSum(10);
getSum(1000);

//Ёлка квадратная
const printStar = (count) => {
  let string = '';
  for (i = 1; i <= count; i++) {
    for (j = 1; j <= count; j++) {
      string += '*';
    }
    string += '\n';
  }
  // console.log(string);
};

printStar(5);


//сортировка массива от минимального до максимального числа
let usersByDay = [812, 1360, 657, 1247, 165];


for (let i = 0; i <= usersByDay.length - 2; i++) {
  let minValue = usersByDay[i];

  for (let j = i + 1; j <= usersByDay.length - 1; j++) {
    if (usersByDay[j] < minValue) {
      minValue = usersByDay[j];
      const swap = usersByDay[i];
      usersByDay[i] = minValue;
      usersByDay[j] = swap;
    }
  }
}

// console.log(usersByDay);

const users = [
  {
    id: 1,
    name: 'Саша',
    isActive: true,
    age: 6
  },
  {
    id: 2,
    name: 'Настя',
    isActive: false,
    age: 19
  },
  {
    id: 3,
    name: 'Аня',
    isActive: true,
    age: 20
  }
];

const getNames = (arr) => {
  const names = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    // names[i] = arr[i].name;
    names.push(arr[i].name);
  }
  return names;
};

const getNamesByForEach = (arr) => {
  const names = [];
  arr.forEach((item) => {
    names.push(item.name);
  });
  return names;
};

//возвращает массив с таким же количеством элементов, как в исходном

const getNamesByMap = (list) => list.map((element) => element.name);
const getActiveUsers = (arr) => {
  const names = [];
  arr.forEach((item) => {
    if (item.isActive) {
      names.push(item.name);
    }
  });
  return names;
};

const getActiveUsersByFilter = (list) => list
  .filter((element) => element.isActive)
  .map((item) => item.name);

const sortByAge = (girls) => [...girls].sort((girl1, girl2) => girl2.age - girl1.age).map((girl) => girl.name);

//console.log(sortByAge(users));
//console.log(users);

//перемножает два числа
const getProduct = (multy1, multy2) => {
  let result = multy1*multy2;
  //console.log(result);
};

getProduct(2, 10);
getProduct(3, 21);
getProduct(4, 34);

const characters = [
  {
    name: 'barney',
    age: 36
  },
  {
    name: 'fred',
    age: 40
  }
];

const pluck = (characters) => {
  const names = [];
  characters.forEach((item) => {
    names.push(item.name);
  });
  return names;
};

console.log(pluck(characters));



const isLessOrEqual = (string, lenght) =>string.lenght <= lenght;
isLessOrEqual();

