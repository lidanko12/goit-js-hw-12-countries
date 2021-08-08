import {form, input, reset, markup } from './refs';
import debounce from 'lodash/debounce';
import fetchCountries from './fetchCountries';
import updateCountriesList from './update';

input.addEventListener('input', debounce(countriesSearch,500 ));
// reset.addEventListener('click', clearField);
form.addEventListener('submit', event => { event.preventDefault() });

function countriesSearch(e) {
    const searchQuery = e.target.value;
    clearField();
    fetchCountries(searchQuery).then(updateCountriesList);
    markup.addEventListener('click', takeSearchResult);
}

function takeSearchResult(e) {
    input.value = e.target.textContent;
    clearField();
    fetchCountries(input.value).then(updateCountriesList);
    input.value = '';
    markup.removeEventListener('click', takeSearchResult);
}


function clearField() {
    markup.innerHTML = '';
}
