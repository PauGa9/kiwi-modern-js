export default {
  // Returns a promise with the results of flights
  getFlights(flightData, page = 0) {
    let date = new Date(flightData.date)
    date = `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    const offset = page * 5;
    const query = `flyFrom=${flightData.from}&to=${flightData.to}&dateFrom=${date}&dateTo=${date}&limit=5&offset=${offset}`;
    const url = 'https://api.skypicker.com/flights?' +  query;
    const apiResults = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.data;
      });

    return apiResults;
  },

  // Returns a promise with results of locations
  getLocations(term) {
    return fetch(`https://api.skypicker.com/locations/?term=${term}&v=2&locale=en-US`)
    .then((response) => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse.locations;
    });
  }
}
