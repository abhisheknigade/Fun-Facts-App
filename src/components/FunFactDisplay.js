import React from 'react';

const FunFactDisplay = ({ fact }) => {
  return (
    <div>
      {fact && <p>{fact}</p>}
    </div>
  );
};

export default FunFactDisplay;
