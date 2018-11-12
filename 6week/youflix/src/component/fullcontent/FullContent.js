import React, { Component } from 'react';
import "./FullContent.css";

class FullContent extends Component {
  render() {
    let iframeSrc = "https://www.youtube.com/embed/"+this.props.content.id
    return (
      <div className="FullContent">
      	<iframe
      		className="my-iframe"
      		frameBorder="0"
      		src={iframeSrc+"?autoplay=1&rel=0"}
      		allowFullScreen={true}
      		allow="autoplay"
      		>
      		</iframe>
      </div>
    );
  }
}

export default FullContent;
