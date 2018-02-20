import React from 'react';

export default (props) => {
  const flights = props.flights.map((flight, index) => {
    return (
      <div className="flight" key={index}>
        <span>from: {flight.from}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>to: {flight.to}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span>date: {flight.date}</span>&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    );
  });

  return (
    <div id="results" className="flights">
      {flights}
    </div>
  );
}
