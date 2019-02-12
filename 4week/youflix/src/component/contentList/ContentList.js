import React from 'react';
import Content from '../content/Content';

import './ContentList.css';

const ContentList = ({contents, onClick}) => {
  // console.log(contents);
  const rowCnt = Math.ceil(contents.length/4);
  const component = [];

  for(let i=0; i< rowCnt; i++){
    const dataPerRow = contents.slice(i*4, (i+1)*4);
    component.push(
      <div className="row" key={i}>
      {
        dataPerRow.map((item, index) => (
          <div className="col-md-3" key={index}>
            {<Content content={item} onClick={onClick}/>}
          </div>  
        ))
      }
      </div>
    );
  }

  return (
    <div className="contentList align-items-center justify-content-center">
      {component}
    </div>
  );
};

export default ContentList;