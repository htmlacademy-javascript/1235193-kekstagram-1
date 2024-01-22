//Генерирует случайное число из диапазона a-b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//создает уникальный номер
const createRandomRange = (min, max) => {
  const previousValues = [];
  return () => {
    let randomNumber = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа диапазона от ${min} до ${max}`);
      return null;
    }
    while (previousValues.includes(randomNumber)) {
      randomNumber = getRandomInteger(min, max);
    }
    previousValues.push(randomNumber);
    return randomNumber;
  };
};

//генерирует случайный индекс массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//назначает клавишу Esc для событий
const isEscapeKey = (evt) => evt.key === 'Escape';


export { getRandomArrayElement };
export { createRandomRange };
export { getRandomInteger };
export { isEscapeKey };
