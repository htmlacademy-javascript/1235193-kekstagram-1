import { similarPhoto } from './photo.js';
import { renderPictures } from './pictures.js';
import { SIMILAR_PHOTO_COUNT } from './constans.js';
import { renderGallery } from './gallery.js';
import'./form.js';

const userPictures = similarPhoto(SIMILAR_PHOTO_COUNT);
renderPictures(userPictures);

renderGallery(userPictures);
