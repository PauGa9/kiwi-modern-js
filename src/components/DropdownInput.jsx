import React from 'react';
import debounce from 'lodash/debounce'
import APIclient from '../APIclient.js';

class DropdownInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', locations: [] };
    this.handleChange = this.handleChange.bind(this);
    this.setValue = this.setValue.bind(this);

    // Debounce the function which will call the API
    this.handleChangeDebounced = debounce(
      (term) => {
        APIclient.getLocations(term)
          .then(locations => {
            // set the state.locations to those locations which are airports
            this.setState({locations: locations.filter(location => location.type === 'airport')});
          });
      },
      400
    );
  }

  handleChange(event) {
    const term = event.target.value;
    this.handleChangeDebounced(term);
    this.setValue(term);
  }

  handleSelectSuggestion(code) {
    this.setValue(code);
    this.setState({locations: []});
  }

  // Sets the state.value and calls the prop onChange, to notify its parent of the new value of the input
  setValue(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  render() {
    const locations = this.state.locations.map(location => {
      return (
        <li key={location.id} onClick={() => this.handleSelectSuggestion(location.code)}>
          <div>{location.code}</div>
          <div>{location.name}</div>
        </li>
      );
    });
    return (
      <div className="dropdown-input">
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <ul>
          {locations}
        </ul>
      </div>
    );
  }
}

export default DropdownInput;
