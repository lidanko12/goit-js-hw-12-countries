function fetchCountries(searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
        .then(res => res.json())
        .then(data => data)
        .catch(error => console.log(`Smth wrong with request ${error}`));
}


export default fetchCountries;