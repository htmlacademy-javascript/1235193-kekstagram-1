import {
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE
} from './constans.js';

const scaleInputElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');
const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');


const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleInputElement.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => scaleImage(DEFAULT_SCALE);

smallerButtonElement.addEventListener('click',onSmallerButtonClick);
biggerButtonElement.addEventListener('click',onBiggerButtonClick);
export { resetScale, imageElement };
