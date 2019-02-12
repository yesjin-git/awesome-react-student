import React from 'react';
import './FullContent.css';

const FullContent = ({content}) => {
  return (
    <div>
      <iframe
        className="my-iframe"
        frameBorder="0"
        src={`https://www.youtube.com/embed/${content.id}?autoplay=1&rel=0`}
        allowFullScreen={true}
        allow="autoplay"
        title={content.id}
        />
    </div>
  );
};

export default FullContent;