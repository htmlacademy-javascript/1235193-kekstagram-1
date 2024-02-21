import { showBigPicture } from './full-size.js';
import { userPicturesContainer } from './pictures.js';

const renderGallery = (pictures) => {
  userPicturesContainer.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }

    evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId);
    showBigPicture(picture);
  });
};

export { renderGallery };
