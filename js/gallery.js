import { showBigPicture } from './full-size.js';
import { renderPictures } from './pictures.js';
import { userPicturesContainer } from './pictures.js';


const renderGallery = (pictures) => {
  userPicturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId);
    showBigPicture(picture);
  });

  renderPictures(pictures, userPicturesContainer);
};

export { renderGallery };
