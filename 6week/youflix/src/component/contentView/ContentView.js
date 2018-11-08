import React, { Component } from 'react';
import "./ContentView.css";

class ContentView extends Component {
  render() {
  	let iframeSrc = "https://www.youtube.com/embed/"+this.props.match.params.id
    return (
      <div className="ContentView">
       	{<iframe
       		className="content-view-iframe"
      		frameBorder="0"
      		width="100%" height="100vw"
      		src={iframeSrc}
      		allowFullScreen={true}
      		allow="autoplay; encrypted-meida"
      		/>}
      </div>
    );
  }
}

export default ContentView;
