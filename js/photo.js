import {createRandomRange} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getRandomInteger} from './util.js';
import {createComment} from './comment.js';

const DESCRIPTION = [
  'Поймал дзен.',
  'Да, да! В это зеркало я буду фоткаться до тех пор, пока не состарюсь.',
  'Диснеевский принц, которого вы заслужили.',
  'Знали бы вы, что у меня на уме.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Ох, и достанется кому-то такая красота!',
  'Я, снова я и опять я.',
  'Милым пушистиком я уже был. Не понравилось.',
  'Мне нравится быть собой. Может быть, немного полнее и с большим количеством полосок.',
  'Оставлю за собой право не соответствовать вашим ожиданиям.',
];

const SIMILAR_PHOTO_COUNT = 25;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;
const generateUniqueId = createRandomRange(1, SIMILAR_PHOTO_COUNT);
const generateUniqueUrl = createRandomRange(1, SIMILAR_PHOTO_COUNT);
const MAX_NUMBER_COMMENT = 20;

//создает объект фото
const createPhoto = () => ({
  id: generateUniqueId(),
  url: `photos/${generateUniqueUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
  comments: Array.from({length: getRandomInteger(1, MAX_NUMBER_COMMENT)}, createComment),
});

//создает массив из объектов фотографий
const similarPhoto = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

console.log(similarPhoto);
