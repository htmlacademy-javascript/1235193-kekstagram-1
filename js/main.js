import { renderPictures } from './pictures.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

const main = async () => {
  try {
    const data = await getData();
    renderPictures(data);
    renderGallery(data);
  } catch (err) {
    showAlert(err.message);
  }
};

main();
