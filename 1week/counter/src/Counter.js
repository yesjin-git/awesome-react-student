import React from 'react';

const Counter = ({number, handleIncrease, handleDecrease, handleReset}) => {
  return (
    <div>
      <h1>Counter</h1>
      <div>값: {number}</div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
};

export default Counter;
