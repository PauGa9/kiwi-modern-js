import React from 'react';
import DropdownInput from './DropdownInput.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {from: '', to: '', date: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const flightData = {
      from: this.state.from,
      to: this.state.to,
      date: this.date.value
    };
    this.props.handleSearchFlights(flightData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <DropdownInput onChange={(value) => this.setState({from: value})}/>
        <DropdownInput onChange={(value) => this.setState({to: value})}/>
        <input type="date" ref={(input) => this.date = input}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Form;
