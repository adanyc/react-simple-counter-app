import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1);

  const handleReset = () => setCounter(value);

  const handleSubstract = () => setCounter(counter - 1);

  return (
    <React.Fragment>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button type="button" onClick={handleAdd}>+1</button>
      <button type="button" onClick={handleReset}>Reset</button>
      <button type="button" onClick={handleSubstract}>-1</button>
    </React.Fragment>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number
}

export default CounterApp;
