import countryListFilter from './country-list-filter';
import refs from './refs';

export default function(value) {
  refs.countryList.innerHTML = '';

  fetch(refs.url + value)
    .then(res => res.json())
    .then(data => {
      countryListFilter(data, data.length);
    })
    .catch(error => console.log(error));
}
