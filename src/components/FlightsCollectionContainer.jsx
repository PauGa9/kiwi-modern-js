import React from 'react';
import APIclient from '../APIclient.js';
import FlightsCollection from './FlightsCollection.jsx';

class FlightsCollectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
    };
    this.searchFlights = this.searchFlights.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.searchFlights(nextProps.flightData);
  }

  searchFlights(flightData) {
    APIclient.getFlights(flightData)
      .then(results => {
        this.setState({
          flights: results
        });
      });
  }

  render() {
    return (
      <FlightsCollection flights={this.state.flights} />
    );
  }
}

export default FlightsCollectionContainer;
