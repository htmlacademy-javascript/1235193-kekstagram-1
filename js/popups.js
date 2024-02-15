import { isEscapeKey } from './util.js';

const success = document.querySelector('#success').content.querySelector('.success');
const error = document.querySelector('#error').content.querySelector('.error');

const closePopup = (evt) => {
  const popup = evt.target.closest('section');
  popup.remove();
};

const closePopupEsc = (evt) => {
  if(isEscapeKey(evt)) {
    closePopup();
  }
};


const showSuccess = () => {
  const successComponent = success.cloneNode(true);

  successComponent.querySelector('.success__button').addEventListener('click', closePopup);
  document.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupEsc);

  //обеспечить еще 2 способа закрытия окна

  document.body.append(successComponent);
};

const showError = () => {
  const errorComponent = error.cloneNode(true);
  errorComponent.querySelector('.error__button').addEventListener('click', closePopup);
  document.addEventListener('click', closePopup);
  document.addEventListener('keydown', closePopupEsc);
  document.body.append(errorComponent);
};


export { showSuccess, showError };
