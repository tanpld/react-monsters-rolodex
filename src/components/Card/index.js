import React from 'react';

import './styles.css';

const Card = props => (
  <div className="card-container">
    <img
      className="card-img"
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <div className="card-body">
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  </div>
);

export default Card;
