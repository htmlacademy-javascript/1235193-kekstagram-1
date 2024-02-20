import { renderPictures } from './pictures.js';
import { renderGallery } from './gallery.js';
import './form.js';
import { getData } from './api.js';
import { showAlert } from './util.js';
import './userphoto.js';
import { init, getFilteredPictures } from './filter.js';

function debounce(callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const main = async () => {
  try {
    const data = await getData();
    renderPictures(data);
    const debouncedRenderGallery = debounce(renderGallery);
    init(data, debouncedRenderGallery);
    renderGallery(getFilteredPictures());
  } catch (err) {
    showAlert(err.message);
  }
};

main();
