import React, { Component } from 'react';
import './ContentList.css';
import Content from "./Content.js"

class ContentList extends Component {
  render() {
    return (
      <div className="contentList row align-items-center justify-content-center">
	      <div className="col-md-3">
	      	<Content src={this.props.contents[0].src} name={this.props.contents[0].name} id={this.props.contents[0].id}/>
	      </div>
	      <div className="col-md-3">
	      	<Content src={this.props.contents[1].src} name={this.props.contents[1].name} id={this.props.contents[1].id}/>
	      </div>
	      <div className="col-md-3">
	      	<Content src={this.props.contents[2].src} name={this.props.contents[2].name} id={this.props.contents[2].id}/>
	      </div>
	      <div className="col-md-3">
	      	<Content src={this.props.contents[3].src} name={this.props.contents[3].name} id={this.props.contents[3].id}/>
	      </div>
      </div>
    );
  }
}

export default ContentList;
