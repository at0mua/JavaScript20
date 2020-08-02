import refs from './refs';
import countryTpl from '../templates/country-card.hbs';
import countriesList from '../templates/counties-list.hbs';
import errorMessage from './errorMessage';

export default function(data, length) {
  if (length === 1) {
    const markup = countryTpl(data);
    refs.countryList.insertAdjacentHTML('beforeend', markup);
  } else if (length > 1 && length <= 10) {
    const markup = countriesList(data);
    refs.countryList.insertAdjacentHTML('beforeend', markup);
  } else {
    errorMessage();
  }
}
