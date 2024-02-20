import { body } from './full-size.js';
import { resetScale } from './scale.js';
import { isValid, reset } from './validation.js';
import { resetEffects } from './effects.js';
import { sendData } from './api.js';
import { showError, showSuccess } from './popups.js';

const imgForm = document.querySelector('.img-upload__form');
const fileInput = imgForm.querySelector('.img-upload__input');
const overlay = imgForm.querySelector('.img-upload__overlay');
const closeButton = imgForm.querySelector('.img-upload__cancel');
const submitButton = imgForm.querySelector('.img-upload__submit');

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
  reset();
  resetScale();
  resetEffects();
};

const setEscapeListener = () => {
  document.addEventListener('keydown', onDocumentKeyDown);
};

// функция для закрытия окна при нажатии Esc
function onDocumentKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    if (!evt.target.classList.contains('text__hashtags') && !evt.target.classList.contains('text__description')) {
      hideModal();
    }
  }
}

// функция для закрытия окна при нажатии крестика
function onCloseButtonClick(evt) {
  evt.preventDefault();
  hideModal();
}

// функция-обработчик при загрузки файла в инпут
const onFileInputChange = () => {
  showModal();
};

const SubmitButtonText = {
  QUIET: 'Опубликовать',
  SENDING: 'Публикую',
};

const disableButton = (status = true) => {
  submitButton.textContent = status ? SubmitButtonText.SENDING : SubmitButtonText.QUIET;
  submitButton.disabled = status;
};

const onFormSubmit = async (evt) => {
  evt.preventDefault();
  if (isValid()) {
    try {
      const bodySubmit = new FormData(imgForm);
      disableButton();
      await sendData(bodySubmit);
      disableButton(false);
      hideModal();
      showSuccess();
    } catch (error) {
      showError(setEscapeListener);
      document.removeEventListener('keydown', onDocumentKeyDown);
      disableButton(false);
    }
  }
};

fileInput.addEventListener('change', onFileInputChange);
imgForm.addEventListener('submit', onFormSubmit);
