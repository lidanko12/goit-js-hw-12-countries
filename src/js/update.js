import countriesTpl from '../templates/countries-list.hbs';
import countryTpl from '../templates/country.hbs';
import { markup } from './refs';
import error from './notify';

function updateCountriesList(data) {
  const markupAll = countriesTpl(data);
  const markupOne = countryTpl(data);

  if (data.status === 404) {
    error({
      type: 'notice',
      text: 'Nothing found ☹',
      delay: 2000,
      width: '300px',
      maxTextHeight: null,
    });
  }

  if (data.length === 1) {
    markup.insertAdjacentHTML('beforeend', markupOne);
    return;
  }

  if (data.length > 10) {
    error({
      type: 'error',
      text: 'Too many matches found. Please enter a more specific query!',
      delay: 2000,
      maxTextHeight: null,
    });
    return;
  }

  markup.insertAdjacentHTML('beforeend', markupAll);
}

export default updateCountriesList;


