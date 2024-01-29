import { similarPhoto } from './photo.js';
import { renderPictures } from './pictures.js';
import { SIMILAR_PHOTO_COUNT } from './constans.js';
import { renderGallery } from './gallery.js';


const userPictures = similarPhoto(SIMILAR_PHOTO_COUNT);
renderPictures(userPictures);

renderGallery(userPictures);

import { fileInput, onFileInputChange, imgForm, onFormSubmit } from './form.js';
fileInput.addEventListener('change', onFileInputChange);
imgForm.addEventListener('submit', onFormSubmit);
