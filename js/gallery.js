import { showBigPicture } from './full-size.js';
import { userPicturesContainer } from './pictures.js';

// функция слушает клик по миниатюре через их родителя, проверяет, что кликнули именно по миниатюре, ищет родителя с соответствующим дата-атрибутом, вызывает функцию для отрисовки большого изображения
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
