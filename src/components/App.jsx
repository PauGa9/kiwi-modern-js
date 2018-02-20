import React from 'react';
import Form from './Form.jsx';
import FlightsCollection from './FlightsCollection.jsx';
import APIclient from '../APIclient.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: []
    }
    this.searchFlights = this.searchFlights.bind(this);
  }

  searchFlights(flightData) {
    const results = APIclient.getFlights(flightData);
    this.setState({
      flights: results
    })
  }

  render() {
    return (
      <div>
        <Form handleSearchFlights={this.searchFlights}/>
        <FlightsCollection flights={this.state.flights} />
      </div>
    );
  }
}

export default App;
