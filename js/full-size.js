import { isEscapeKey } from './util.js';
import { COMMENTS_PER_PORTION } from './constans.js';

const bigPicture = document.querySelector('.big-picture');
const statistic = bigPicture.querySelector('.social__comment-count');
const commentsList = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const commentsLoader = document.querySelector('.comments-loader');

// счетчик показа комментариев
let commentsShown = 0;

// массив отрисованных комментариев
const allComments = [];

// общее число комментариев
let totalComments = 0;

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
  commentsShown = commentsShown + 1;
  return comment;
};

// функция для отрисовки или скрытия кнопки "Загрузить еще" в зависимости от количества комментариев
const renderLoader = () => {
  if (commentsShown < totalComments) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

// функция для отрисовки строчки статистики показанных комментариев из их общего количества
const renderStatistic = () => {
  statistic.innerHTML = `${commentsShown} из <span class="comments-count">${totalComments}</span> комментариев`;
};

//отрисовка списка комментариев через добавление фрагмента с лишками в ul. Массив комментариев для отрисовки формируется методом splice(), который удаляет элементы из первоначального массива и возвращает удаленные элементы в виде нового массива
const renderComments = () => {
  const fragment = document.createDocumentFragment();
  allComments.splice(0, COMMENTS_PER_PORTION).forEach((item) => {
    fragment.append(createComment(item));
  });

  commentsList.append(fragment);
  renderLoader();
  renderStatistic();
};

commentsLoader.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderComments();
});


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
  bigPicture.querySelector('.comments-loader').classList.add('hidden');

  commentsList.innerHTML = '';
  allComments.length = 0;
  allComments.push(...comments.slice());
  totalComments = comments.length;
  commentsShown = 0;

  renderComments();
  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.addEventListener('click', onBigPictureCloseButtonClick);
};

export { showBigPicture, body };
