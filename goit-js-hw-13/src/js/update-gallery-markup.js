import refs from './refs';
import imgTpl from '../templates/gallery-card.hbs';

function updateGalleryMarkup(data) {
  const galleryMarkup = imgTpl(data);
  refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);
}

export default updateGalleryMarkup;
