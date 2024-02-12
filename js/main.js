import { similarPhoto } from './photo.js';
import { renderPictures } from './pictures.js';
import { SIMILAR_PHOTO_COUNT } from './constans.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { getData, sendData } from './api.js';
import { showAlert } from './util.js';


const userPictures = similarPhoto(SIMILAR_PHOTO_COUNT);
renderPictures(userPictures);

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert(err.message);
}
