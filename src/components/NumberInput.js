import React, { useState } from 'react';
import { fetchNumberFact } from './APICall'; // Import the API function

const NumberInput = () => {
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
        setError(''); // Clear previous error message


        
        if (number) {
          try {
            // Fetch fact using the API function
            const factData = await fetchNumberFact(number);
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
      <input
        type="text"
        value={number}
        onChange={NumberChangeHandler} // Handle input changes
        onKeyPress={handleKeyPress}    // Handle key press events
        placeholder="Enter a number"
      />

      {error && <p className="error">{error}</p>} 
      {fact && <p className="fact">{fact}</p>}   
    </div>
  );
};

export default NumberInput;
