import React from 'react';
import APIclient from '../APIclient.js';
import FlightsCollection from './FlightsCollection.jsx';

class FlightsCollectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      page: 0,
      results: 0
    };
    this.searchFlights = this.searchFlights.bind(this);
    this.getPrevPage = this.getPrevPage.bind(this);
    this.getNextPage = this.getNextPage.bind(this);
  }

  get hasNextPage() {
    return (this.state.results > 0) && this.state.results > (this.state.page * 5 + 5)
  }

  get hasPrevPage() {
    return this.state.page > 0
  }

  componentWillReceiveProps(nextProps) {
    this.searchFlights(nextProps.flightData);
  }

  searchFlights(flightData) {
    APIclient.getFlights(flightData)
      .then(flights => {
        this.setState({
          flights: flights.data,
          page: 0,
          results: flights.results
        });
      });
  }

  getNextPage() {
    if (!this.hasNextPage) return;

    APIclient.getFlights(this.props.flightData, this.state.page + 1)
      .then(results => {
        this.setState(prevState => ({
          flights: results.data,
          page: prevState.page + 1
        }));
      });
  }

  getPrevPage() {
    if (!this.hasPrevPage) return;

    APIclient.getFlights(this.props.flightData, this.state.page - 1)
      .then(results => {
        this.setState(prevState => ({
          flights: results.data,
          page: prevState.page - 1
        }));
      });
  }

  render() {
    return (
      <div>
        <FlightsCollection flights={this.state.flights} />
        <button onClick={this.getPrevPage} disabled={!this.hasPrevPage} >Prev</button>
        <button onClick={this.getNextPage} disabled={!this.hasNextPage} >Next</button>
      </div>
    );
  }
}

export default FlightsCollectionContainer;
