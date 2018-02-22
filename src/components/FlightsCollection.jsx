import React from 'react';

export default (props) => {
  const flights = props.flights.map((flight, index) => {
    const departure = new Date(flight.dTime*1000).toLocaleDateString('en', {weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'});
    const arrival = new Date(flight.aTime*1000).toLocaleDateString('en', {weekday: 'short', day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'});
    return (
      <div className="flight" key={index} style={{height: '50px'}}>
        <div style={{minWidth: '80px', display: 'inline-block'}}>{flight.conversion.EUR} €</div>
        <div style={{minWidth: '200px', display: 'inline-block', textAlign: 'center'}}>
          <div>{flight.cityFrom} ({flight.flyFrom})</div>
          <div>{departure}</div>
        </div>
        <div style={{width: '40px', display: 'inline-block', textAlign: 'center'}}>></div>
        <div style={{minWidth: '200px', display: 'inline-block', textAlign: 'center'}}>
          <div>{flight.cityTo} ({flight.flyTo})</div>
          <div>{arrival}</div>
        </div>
      </div>
    );
  });

  return (
    <div id="results" className="flights">
      {flights}
    </div>
  );
}
