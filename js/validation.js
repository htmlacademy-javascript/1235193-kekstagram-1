const imgForm = document.querySelector('.img-upload__form');
const hashtagField = imgForm.querySelector('.text__hashtags');
import {
  MAX_HASHTAG_COUNT,
  VALID_SYMBOLS,
  TAG_ERROR_TEXT
} from './constans.js';

const pristine = new Pristine(imgForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

const hasValidCount = (tags) => tags.length <= MAX_HASHTAG_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isValidTag = (tag) => VALID_SYMBOLS.test(tag);

const validateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

const isValid = () => pristine.validate();

const reset = () => pristine.reset();
export { isValid, reset };
