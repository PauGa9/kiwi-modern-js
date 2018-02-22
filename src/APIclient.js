export default {
  getFlights(flightData) {
    let date = new Date(flightData.date)
    date = `${date.getDate()}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    const query = `flyFrom=${flightData.from}&to=${flightData.to}&dateFrom=${date}&dateTo=${date}`;
    const url = 'https://api.skypicker.com/flights?' +  query;
    const apiResults = fetch(url)
      .then((response) => {
        return response.json();
      })
      .then(jsonResponse => {
        return jsonResponse.data;
      });

    return apiResults;
  }
}
