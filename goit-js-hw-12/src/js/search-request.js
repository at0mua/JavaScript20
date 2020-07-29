import countryListFilter from './country-list-filter';
import refs from './refs';

export default function(value) {
  refs.countryList.innerHTML = '';

  if (value.length > 0) {
    return fetch(refs.url + value)
      .then(res => res.json())
      .then(data => {
        countryListFilter(data, data.length);
      })
      .catch(error => console.log(error));
  }
}
