import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Content.css";
import PropTypes from "prop-types";

const ContentView = (props) => {
      let url = "/view/"+props.id
      return (<Link to={url}>
                {props.children}
              </Link>)
    }

const FullContentLink = (props) => {
    return (<a onClick={props.onChangeFullContent}>
              {props.children}
            </a>)
    }

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

  onChangeFullContent = () => {
    this.props.onClick(this.props.content)
    console.log(this.props.content)
  }

  displayImg = () => {
    let imgSrc = "https://img.youtube.com/vi/"+this.props.content.id+"/0.jpg"
    let imgComponent = (
    <div>
      <img alt="thumbnail img" className="thumbnail" src={imgSrc} />{this.state.isShow?
        (<div className="middle">
          <div className="text"> 
            {this.props.content.name} 
          </div>
        </div>)
        :""}
    </div>);
 
    return imgComponent
  }


  render() {
    return (
      <div className="content" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onUnHover()}>
      {/* 홈 화면에서는  */}
      {this.props.onClick ?
        (<FullContentLink onChangeFullContent={this.onChangeFullContent}>{this.displayImg()}</FullContentLink>):
        (<ContentView id={this.props.content.id}>{this.displayImg()}</ContentView>)}
      </div>
    );
  }
}
Content.propTypes = {
  onClick : PropTypes.func,
  content: PropTypes.object
}

export default Content;
