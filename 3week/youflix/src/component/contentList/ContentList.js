import React, { Component } from 'react';
import './ContentList.css';
import Content from "../content/Content.js"

class ContentList extends Component {
// 0 4
// 4 8

  partialRender() {
  	var count = Math.ceil(this.props.contents.length/4)
  	let component = []
  	for(let i =0;i<count;i++) {
  		let data = this.props.contents.slice(i*4,i*4+4)

  		component.push(
  			<div className=" row">
  				{
  					data.map((c,index) => {
			      		return (
			      		  <div className="col-md-3" key={index}>
					      	<Content content={c} onClick={this.props.onClick}/>
					      </div>
			      		)
			      	})
  				}
  			</div>
  		)
  	}

  	return component
  }	
  render() {
  	

    return (
      <div className="contentList align-items-center justify-content-center">
      	{/*<div className=" row align-items-center justify-content-center">*/}
	      { 
	      // list & keys
	      	// this.props.contents.map((c,index) => {
	      	// 	return (
	      	// 	  <div className="col-md-3" key={index}>
			     //  	<Content src={this.props.contents[index].src} name={this.props.contents[index].name} id={this.props.contents[index].id}/>
			     //  </div>
	      	// 	)
	      	// })
	      	this.partialRender()
	      }
	      {/*</div>*/}
      </div>
    );
  }
}

export default ContentList;
