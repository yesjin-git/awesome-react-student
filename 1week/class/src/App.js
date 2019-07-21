import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <div className="section_main">
      <h2>Counter 1씩 증감</h2>
      <Counter interval={1} />
      
      <hr />
      <h2>Counter 2씩 증감</h2>
      <Counter interval={2} />
    </div>
  );
};

export default App;