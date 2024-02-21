import { isEscapeKey } from './util.js';
import { COMMENTS_PER_PORTION } from './constans.js';

const bigPicture = document.querySelector('.big-picture');
const statistic = bigPicture.querySelector('.social__comment-count');
const commentsList = bigPicture.querySelector('.social__comments');
const body = document.querySelector('body');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureImg = bigPicture.querySelector('.big-picture__img');
const commentsLoader = document.querySelector('.comments-loader');

let commentsShown = 0;

const allComments = [];

let totalComments = 0;

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

const renderLoader = () => {
  if (commentsShown < totalComments) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const renderStatistic = () => {
  statistic.innerHTML = `${commentsShown} из <span class="comments-count">${totalComments}</span> комментариев`;
};

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


const onBigPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const onBigPictureCloseButtonClick = (evt) => {
  evt.preventDefault();
  hideBigPicture();
};

function hideBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onBigPictureEscKeydown);
  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
}

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
