import { similarPhoto } from './photo.js';
import { SIMILAR_PHOTO_COUNT } from './constans.js';

const userPicturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content;
const userPictures = similarPhoto(SIMILAR_PHOTO_COUNT);

const similarListFragment = document.createDocumentFragment();

userPictures.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  similarListFragment.append(pictureElement);
});

userPicturesContainer.append(similarListFragment);
