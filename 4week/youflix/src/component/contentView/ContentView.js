import React from 'react';
import './ContentView.css';

const ContentView = ({match}) => {
  const { id } = match.params;
  return (
    <div>
      <iframe
       		className="content-view-iframe"
      		frameBorder="0"
      		width="100%" height="100vw"
      		src={"https://www.youtube.com/embed/"+id}
      		allowFullScreen={true}
          allow="autoplay; encrypted-meida"
          title={id}
      		/>
    </div>
  );
};

export default ContentView;