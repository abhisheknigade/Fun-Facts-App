import React from 'react';
import NumberInput from './components/NumberInput';
import DateInput from './components/DateInput';
import MathInput from './components/MathInput';
import './App.css';

const App = () => {
  return (
    //here im rendering all my component
    <div className="App">
      <h1>-- Fun Facts App --</h1>   
      <NumberInput />
      <DateInput />
      <MathInput />
    </div>
  );
};

export default App;
