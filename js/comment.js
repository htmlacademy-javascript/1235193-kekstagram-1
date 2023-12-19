import {createRandomRange} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getRandomInteger} from './util.js';

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Маша',
  'Артем',
  'Женя',
  'Вера',
  'Марина',
  'Илья',
];

const SIMILAR_COMMENT_ID = 300;
const MAX_NUMBER_AVATAR = 6;

const generateUniqueCommentId = createRandomRange(1, SIMILAR_COMMENT_ID);

//создает объект комментария
const createComment = () => ({
  id: generateUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

export {createComment};
