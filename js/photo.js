import { createRandomRange } from './util.js';
import { getRandomArrayElement } from './util.js';
import { getRandomInteger } from './util.js';
import { createComment } from './comment.js';
import {
  DESCRIPTION,
  MIN_COUNT_LIKES,
  MAX_COUNT_LIKES,
  MAX_NUMBER_COMMENT
} from './constans.js';

let generateUniqueId = null;
let generateUniqueUrl = null;

//создает объект фото
const createPhoto = () => ({
  id: generateUniqueId(),
  url: `photos/${generateUniqueUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
  comments: Array.from({ length: getRandomInteger(1, MAX_NUMBER_COMMENT) }, createComment),
});

//создает массив из объектов фотографий
const similarPhoto = (countPhoto) => {
  generateUniqueId = createRandomRange(1, countPhoto);
  generateUniqueUrl = createRandomRange(1, countPhoto);
  return Array.from({ length: countPhoto }, createPhoto);
};

export { similarPhoto };
