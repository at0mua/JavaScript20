import images from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');

const createElem = (element, index) => {
  const item = document.createElement('li');
  item.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = element.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = element.preview;
  image.dataset.source = element.original;
  image.alt = element.description;
  image.dataset.index = index;

  link.appendChild(image);
  item.appendChild(link);

  return item;
};

const arrElem = images.map((element, index) => createElem(element, index));

galleryRef.append(...arrElem);

galleryRef.addEventListener('click', imgClick);

function imgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  console.log(event.target.dataset.source);
}
