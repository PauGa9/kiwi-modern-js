import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {from: '', to: '', date: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const flightData = {
      from: this.from.value,
      to: this.to.value,
      date: this.date.value
    };
    this.props.handleSearchFlights(flightData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={(input) => this.from = input}
        />
        <input
          type="text"
          ref={(input) => this.to = input}
        />
        <input
          type="date"
          ref={(input) => this.date = input}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Form;
