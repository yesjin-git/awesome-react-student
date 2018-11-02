import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Content.css";

class Content extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  	isShow: false
	  };
	}

	onHover = () => {
		this.setState({isShow:true})
	}

	onUnHover = () => {
		this.setState({isShow:false})
	}

  render() {
  	let imgSrc = "https://img.youtube.com/vi/"+this.props.id+"/0.jpg"
    return (
      <div className="content" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onUnHover()}>
       	{/*<iframe
       		className="my-iframe2"
      		frameBorder="0"
      		width="100%" height="100vw"
      		src={this.props.src}
      		allowFullScreen={true}
      		allow="autoplay; encrypted-meida"
      		/>*/}
        <NavLink to={"/view/"+this.props.id}>
          <img className="thumbnail" src={imgSrc} />  
          {this.state.isShow?(<div className="middle"><div className="text"> {this.props.name} </div></div>):""}
        </NavLink>
      </div>
    );
  }
}

export default Content;
