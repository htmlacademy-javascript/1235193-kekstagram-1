import { renderPictures } from './pictures.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { getData } from './api.js';
import { showAlert, debounce } from './util.js';
import './userphoto.js';
import { init, getFilteredPictures } from './filter.js';

const main = async () => {
  try {
    const data = await getData();
    renderPictures(data);
    const debouncedRenderGallery = debounce(renderPictures);
    init(data, debouncedRenderGallery);
    renderGallery(getFilteredPictures());
  } catch (err) {
    showAlert(err.message);
  }
};

main();
