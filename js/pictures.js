const userPicturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
//  отрисовка миниатюр по шаблону и добавление их в контейнер
const renderPictures = (pictures) => {
  const similarListFragment = document.createDocumentFragment();

  pictures.forEach(({ url, likes, comments, description, id }) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    pictureElement.dataset.thumbnailId = id;
    similarListFragment.append(pictureElement);
  });

  userPicturesContainer.append(similarListFragment);
};

export { renderPictures };
export { userPicturesContainer };
