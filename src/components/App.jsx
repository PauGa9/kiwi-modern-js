import React from 'react';
import Form from './Form.jsx';
import FlightsCollectionContainer from './FlightsCollectionContainer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flightData: {} };
    this.handleSearchFlights = this.handleSearchFlights.bind(this);
  }

  handleSearchFlights(flightData) {
    this.setState({ flightData: flightData });
  }

  render() {
    return (
      <div>
        <Form handleSearchFlights={this.handleSearchFlights} />
        <FlightsCollectionContainer flightData={this.state.flightData} />
      </div>
    );
  }
}

export default App;
