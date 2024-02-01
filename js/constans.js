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
const MAX_NUMBER_COMMENT = 20;
const COMMENTS_PER_PORTION = 5;
const MAX_HASHTAG_COUNT = 5;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const TAG_ERROR_TEXT = 'Неправильно заполнены хештеги';
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
];

export {
  DESCRIPTION,
  SIMILAR_PHOTO_COUNT,
  MIN_COUNT_LIKES,
  MAX_COUNT_LIKES,
  MAX_NUMBER_COMMENT,
  COMMENTS_PER_PORTION,
  MAX_HASHTAG_COUNT,
  VALID_SYMBOLS,
  TAG_ERROR_TEXT,
  SCALE_STEP,
  MIN_SCALE,
  MAX_SCALE,
  DEFAULT_SCALE,
  EFFECTS
};
