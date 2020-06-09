import images from './gallery-items.js';

const imagesQuantity = images.length;
const galleryRef = document.querySelector('.js-gallery');
const modalWindowRef = document.querySelector('.js-lightbox');
const closeModalBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]',
);
const modalOverlayRef = document.querySelector('.lightbox__overlay');
const modalImg = document.querySelector('.lightbox__image');

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

const arrElem = images.map((element, index) => createElem(element, index + 1));

galleryRef.append(...arrElem);

galleryRef.addEventListener('click', imgClick);
closeModalBtnRef.addEventListener('click', onCloseModal);
modalOverlayRef.addEventListener('click', onOverlayClick);

function imgClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  onOpenModal(event);
}

function onOpenModal(event) {
  modalImg.src = event.target.dataset.source;
  modalImg.alt = event.target.alt;
  modalImg.dataset.index = event.target.dataset.index;
  window.addEventListener('keydown', onPressEscape);
  window.addEventListener('keydown', onPressArrow);
  modalWindowRef.classList.add('is-open');
}

function onCloseModal() {
  modalImg.src = '';
  modalImg.alt = '';
  window.removeEventListener('keydown', onPressEscape);
  window.removeEventListener('keydown', onPressArrow);
  modalWindowRef.classList.remove('is-open');
}

function onOverlayClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  onCloseModal();
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    console.log(event.target);
    onCloseModal();
  }
}

function nextImg(event, index) {
  if (event.code === 'ArrowRight') {
    index += 1;
    validIndex(index);
    console.log(index);
  }
}

function prevImg(event, index) {
  if (event.code === 'ArrowLeft') {
    index -= 1;
    validIndex(index);
    console.log(index);
  }
}

function validIndex(index) {
  if (index >= 1 && index <= imagesQuantity) {
    modalImg.src = images[index - 1].original;
    modalImg.alt = images[index - 1].description;
    modalImg.dataset.index = index;
  }
}

function onPressArrow(event) {
  const index = Number(modalImg.dataset.index);
  nextImg(event, index);
  prevImg(event, index);
}
