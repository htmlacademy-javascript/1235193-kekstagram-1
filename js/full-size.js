import { isEscapeKey } from './util.js';
import { COMMENTS_PER_PORTION } from './constans.js';

const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const commentsLoader = document.querySelector('.comments-loader');

let commentsShown = 0;
let comments = [];


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
const renderComments = (comments) => {
  commentsShown += COMMENTS_PER_PORTION;

  if (commentsShown >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShown = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < commentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);

  }

  commentsList.innerHTML = '';
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
function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
}

//функция для показа большого изображения
const showBigPicture = ({ url, likes, comments, description }) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  bigPictureImg.querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.social__comment-count').classList.add('hidden');
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  renderComments(comments);
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);
};

export { showBigPicture };
