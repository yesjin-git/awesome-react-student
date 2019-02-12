import React from 'react';

const FuncComp = ({children, text}) => {
  return (
    <div>
      <p>{text}</p>
      <p>{children}</p>
    </div>
  )
}

export default FuncComp;