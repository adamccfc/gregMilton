import React from 'react'

const Card = ({tag, headline}) => {
  return (
    <div className="card">
      <div className="card__tag">{ tag }</div>
      <h3 className="card__headline">{ headline }</h3>
    </div>
  );
}

export default Card
