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
const SIMILAR_COMMENT_ID = 300;
const MIN_NUMBER_LIKES = 15;
const MAX_NUMBER_LIKES = 200;
const MAX_NUMBER_COMMENT = 20;
const MAX_NUMBER_AVATAR = 6;

//Генерирует случайное число из диапазона a-b
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//создает уникальный номер
const createRandomRange = (min, max) => {
  const previousValues = [];
  return () => {
    let randomNumber = getRandomInteger(min, max);
    if(previousValues.length >= (max - min + 1)) {
      console.error(`Перебраны все числа диапазона от ${min} до ${max}`);
      return null;
    }
    while(previousValues.includes(randomNumber)){
      randomNumber = getRandomInteger(min, max);
    }
    previousValues.push(randomNumber);
    return randomNumber;
  };
};

const generateUniqueId = createRandomRange(1, SIMILAR_PHOTO_COUNT);
const generateUniqueUrl = createRandomRange(1, SIMILAR_PHOTO_COUNT);
const generateUniqueCommentId = createRandomRange(1, SIMILAR_COMMENT_ID);

//генерирует случайный индекс массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

//создает объект комментария
const createComment = () => ({
  id: generateUniqueCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, MAX_NUMBER_AVATAR)}.svg`,
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

//создает объект фото
const createPhoto = () => ({
  id: generateUniqueId(),
  url: `photos/${generateUniqueUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(MIN_NUMBER_LIKES, MAX_NUMBER_LIKES),
  comments: Array.from({length: getRandomInteger(1, MAX_NUMBER_COMMENT)}, createComment),
});

//создает массив из объектов фотографий
const similarPhoto = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);

console.log(similarPhoto);
