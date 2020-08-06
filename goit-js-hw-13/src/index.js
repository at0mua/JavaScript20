import './styles.css';
import fetchService from './js/fetch-service';
import refs from './js/refs';
import updateGalleryMarkup from './js/update-gallery-markup';

refs.serchForm.addEventListener('submit', e => {
  e.preventDefault();

  const form = e.currentTarget;
  fetchService.query = form.elements.query.value;

  refs.gallery.innerHTML = '';

  form.reset();
  fetchService.resetPage();

  fetchService.fetchRequets().then(updateGalleryMarkup);
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchService.fetchRequets().then(updateGalleryMarkup);
});
