import React, { Component } from 'react';
import "./ContentView.css";

class ContentView extends Component {
	constructor(props) {
	  super(props);
	}

  render() {
  	let iframeSrc = "https://www.youtube.com/embed/A3VdFB6QWt0"
    return (
      <div className="ContentView">
       	{<iframe
       		className="my-iframe2"
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
