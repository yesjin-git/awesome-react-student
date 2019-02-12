import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

class Content extends Component {
  state = {
    isShow: false
  }

  onHover = () => {
    this.setState({isShow: true});
  }

  onUnHover = () => {
    this.setState({isShow: false});
  }

  onChangeFullContent = () => {
    this.props.onClick(this.props.content);
  }

  displayImg = () => {
    const { content } = this.props;
    const { isShow } = this.state;
    const imgSrc = `https://img.youtube.com/vi/${content.id}/0.jpg`;
    return (<div><img className="thumbnail" alt="동영상썸네일" src={imgSrc}/>{isShow && <div className="middle">{content.name}</div>}</div>)
  }

  render() {
    const { content, onClick } = this.props;
    const { onHover, onUnHover, onChangeFullContent } = this;
    return (
      <div className="content" onMouseEnter={onHover} onMouseLeave={onUnHover}>
      {
        onClick ? 
          (<div onClick={onChangeFullContent}>{this.displayImg()}</div>) :
          (<Link to={`/view/${content.id}`}>{this.displayImg()}</Link>)
      }        
      </div>
    );
  }
}

export default Content;