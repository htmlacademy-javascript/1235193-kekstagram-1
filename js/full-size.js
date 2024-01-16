import { isEscapeKey } from './util.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');

// создание одного комментария в li
const createComment = (obj) => {
  const comment = document.createElement('li');
  const avatar = document.createElement('img');
  const socialText = document.createElement('p');
  comment.classList.add('social__comment');
  avatar.classList.add('social__picture');
  avatar.alt = obj.name;
  avatar.width = 35;
  avatar.height = 35;
  avatar.src = obj.avatar;
  socialText.classList.add('social__text');
  socialText.textContent = obj.message;

  comment.appendChild(avatar);
  comment.appendChild(socialText);

  return comment;
};

//отрисовка списка комментариев через добавление фрагмента с лишками в ul
const renderComments = (arr) => {
  commentsList.innerHTML = '';
  const fragment = document.createDocumentFragment();

  arr.forEach((item) => {
    fragment.appendChild(createComment(item));
  });
  commentsList.append(fragment);
};

//функция для закрытия большого изображения по нажатию esc
const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

//функция для закрытия большого изображния по нажатию кнопки с крестиком
const onBigPictureCloseButtonClick = (evt) => {
  evt.preventDefault();
  hideBigPicture();
};

// функция, выполняющая действия с DOM-элементами при закрытии большого изображения
function hideBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
}

//функция для показа большого изображения
const showBigPicture = ({url, likes, comments, description}) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPicture.querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  renderComments(comments);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);
};

export {showBigPicture};
