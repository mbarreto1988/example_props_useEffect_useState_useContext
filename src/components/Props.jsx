import React from 'react';

const Props = ({ title, description, count }) => {
  return (
    <div className='props'>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>El valor del contador es: {count}</p>
    </div>
  );
};

export default Props;