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
  refs.loadMoreBtn.classList.add('is-hidden');

  fetchImg();
});

refs.loadMoreBtn.addEventListener('click', fetchImg);

function fetchImg() {
  fetchService.fetchRequets().then(img => {
    updateGalleryMarkup(img);
    refs.loadMoreBtn.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}
