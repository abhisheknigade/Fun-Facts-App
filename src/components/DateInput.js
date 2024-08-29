import React, { useState } from 'react';
import { fetchDateFact } from './APICall';  // Importing the API function

const DateInput = () => {
  const [date, setDate] = useState('');
  const [fact, setFact] = useState('');
  const [error, setError] = useState('');


  const DateChangeHandler = (e) => {
    const value = e.target.value;
    setDate(value);
  };

  
  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      const [day, month] = date.split('-');
                       
      //im adding validaions here

      if (month === '02' && parseInt(day) > 29) {
        setError('Feb has 29 days only');
        setFact('');
        return;
      }

      if (/^\d{2}-\d{2}$/.test(date) && parseInt(day) > 0 && parseInt(day) <= 31 && parseInt(month) > 0 && parseInt(month) <= 12) {
        setError('');


        if (date) {
          try {
            const factData = await fetchDateFact(day, month);
            setFact(factData);
          } catch (error) {
            setError('Error fetching data');
            setFact('');
          }
        } else {
          setFact('');
        }
      } else {
        
        setError('Please enter a valid date in DD-MM format.');
        setFact('');
      }

      if (!date.trim()) {  
        setError('');
        setFact('');
        return;
      }
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={date}
        onChange={DateChangeHandler}  
        onKeyPress={handleKeyPress}   
        placeholder="Enter date as (15-02)"
      />

      {error && <p className="error">{error}</p>}
      {fact && <p className="fact">{fact}</p>}
    </div>
  );
};

export default DateInput;
