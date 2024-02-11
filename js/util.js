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

const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};


export { getRandomArrayElement };
export { createRandomRange };
export { getRandomInteger };
export { isEscapeKey };
export { showAlert };
