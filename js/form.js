import { body } from './full-size.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import {
  MAX_HASHTAG_COUNT,
  VALID_SYMBOLS,
  TAG_ERROR_TEXT
} from './constans.js';

const imgForm = document.querySelector('.img-upload__form');
const fileInput = imgForm.querySelector('.img-upload__input');
const overlay = imgForm.querySelector('.img-upload__overlay');
const hashtagField = imgForm.querySelector('.text__hashtags');
const commentField = imgForm.querySelector('.text__description');
const closeButton = imgForm.querySelector('.img-upload__cancel');


// функция-конструктор для подключения библиотеки Пристин
const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

// функция для открытия модального окна
const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeyDown);
  closeButton.addEventListener('click', onCloseButtonClick);
  resetScale();
};


//функция для закрытия модального окна
const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeyDown);
  closeButton.removeEventListener('click', onCloseButtonClick);
  imgForm.reset();
  pristine.reset();
  resetScale();
};

// функция для закрытия окна при нажатии Esc
function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideModal();
  }
}

// функция для закрытия окна при нажатии крестика
function onCloseButtonClick(evt) {
  evt.preventDefault();
  hideModal();
}

// слушатель событий, удаляющий слушатель для закрытия со страницы, если поле для хештегов в фокусе
hashtagField.addEventListener('focus', () => {
  document.removeEventListener('keydown', onDocumentKeyDown);
});

// слушатель событий, возвращающий слушатель для закрытия со страницы, если поле для хештегов не в фокусе
hashtagField.addEventListener('blur', () => {
  document.addEventListener('keydown', onDocumentKeyDown);
});

//слушатель событий, удаляющий слушатель для закрытия со страницы, если поле для комментариев в фокусе
commentField.addEventListener('focus', () => {
  document.removeEventListener('keydown', onDocumentKeyDown);
});


// слушатель событий, возвращающий слушатель для закрытия со страницы, если поле для комментариев не в фокусе
commentField.addEventListener('blur', () => {
  document.addEventListener('keydown', onDocumentKeyDown);
});

// функция-обработчик при загрузки файла в инпут
const onFileInputChange = () => {
  showModal();
};

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

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

export { fileInput, onFileInputChange, imgForm, onFormSubmit };
