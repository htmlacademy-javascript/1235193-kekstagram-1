const imgForm = document.querySelector('.img-upload__form');
const hashtagField = imgForm.querySelector('.text__hashtags');
import {
  MAX_HASHTAG_COUNT,
  VALID_SYMBOLS,
  TAG_ERROR_TEXT
} from './constans.js';

// функция-конструктор для подключения библиотеки Пристин
const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

// функция проверяет  количество хештегов
const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

// функция проверяет уникальность хештегов
const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

// функция проверяет правильность написания каждого хештега в соответствии с регулярным выражением
const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

// функция проверяет введенное значение поля для хештегов
const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

// задаем конкретные поля для валидации и текст сообщения при ошибке
pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const isValid = () => pristine.validate();

const reset = () => pristine.reset();
export { isValid, reset };
