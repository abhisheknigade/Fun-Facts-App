import React, { useState } from 'react';
import { fetchMathFact } from './APICall';  // Import the API function

const MathInput = () => {
  const [number, setNumber] = useState('');
  const [fact, setFact] = useState('');
  const [error, setError] = useState('');

  
  const NumberChangeHandler = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

  
  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      if (/^\d*$/.test(number)) {
        setError('');  // for clearing existing error

        
        if (number) {
          try {
            const factData = await fetchMathFact(number);
            setFact(factData);
          } catch (error) {
            setError('Error fetching data');
            setFact('');
          }
        } else {
          setFact('');
        }
      } else {
        setError('Please enter digits only.');
        setFact('');
      }
    }
  };

  return (
    <div className="input-group">
      <input type="text" 
      value={number}
      onChange={NumberChangeHandler}  // Handle input changes
      onKeyPress={handleKeyPress}     // using for key press events
      placeholder="Enter a number for math trivia"
      />

      {error && <p className="error">{error}</p>}
      {fact && <p className="fact">{fact}</p>}
    </div>
  );
};

export default MathInput;
