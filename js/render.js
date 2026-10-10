const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureElement = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const image = pictureElement.querySelector('.picture__img');
  const likes = pictureElement.querySelector('.picture__likes');
  const comments = pictureElement.querySelector('.picture__comments');

  image.src = photo.url;
  image.alt = photo.description;
  likes.textContent = photo.likes;
  comments.textContent = photo.comments.length;

  return pictureElement;
};

const renderPictures = (photos) => {
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};

export { renderPictures };
