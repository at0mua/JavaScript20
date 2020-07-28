import './styles.css';
import debounce from 'lodash.debounce';
import searchСountries from './js/search-request';
import refs from './js/refs';

refs.searchForm.addEventListener(
  'input',
  debounce(event => {
    searchСountries(event.target.value);
  }, 500),
);
