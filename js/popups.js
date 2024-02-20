import { isEscapeKey } from './util.js';

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

let restoreSomeHandlers = null;

const hidePopup = () => {
  const popup = document.querySelector('.success') || document.querySelector('.error');
  const isErrorPopup = document.querySelector('.error');
  popup.remove();
  document.removeEventListener('keydown', closePopupEsc);
  if(isErrorPopup){
    restoreSomeHandlers();
  }
};

const closePopup = (evt) => {
  const popup = evt.target.closest('section');
  popup.remove();
  document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc(evt) {
  if (isEscapeKey(evt)) {
    hidePopup();
  }
}

const closeByOverlay = (evt) => {
  if (evt.target.classList.contains('success') || evt.target.classList.contains('error')) {
    hidePopup();
  }
};

const showSuccess = () => {
  const successComponent = success.cloneNode(true);
  successComponent.querySelector('.success__button').addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupEsc);
  document.body.append(successComponent);
  document.querySelector('.success').addEventListener('click', closeByOverlay);
};

const showError = (fn) => {
  restoreSomeHandlers = fn;
  const errorComponent = error.cloneNode(true);
  errorComponent.querySelector('.error__button').addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupEsc);
  document.body.append(errorComponent);
  document.querySelector('.error').addEventListener('click', closeByOverlay);
};


export { showSuccess, showError };
