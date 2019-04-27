import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Content.css';
import PropTypes from 'prop-types';

//실제의 ContentView 컴포넌트와는 별개로 url을 이용한 라우팅으로 실제 ContentView 컴포넌트를 호출하기 위해 Content.js 내부의 컴포넌트
const ContentView = ({ id, children }) => {
  const url = `/view/${id}`;
  return (
    <Link to={url}>
      {children}
    </Link>
  );
  
};

//MainView -> ContentList -> Content -> FullContentLink 이런 순으로 MainView의 handleFullChange 함수가 전달되어 최종적으로 FullContentLink에서 호출된다.
const FullContentLink = ({ onChangeFullContent, children }) => (
  <div onClick={onChangeFullContent}>
    {children}
  </div>
);

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
	    isShow: false,
    };
  }

	onHover = () => {
	  this.setState({ isShow: true });
	}

	onUnHover = () => {
	  this.setState({ isShow: false });
	}

  onChangeFullContent = () => {
    const { onClick, content } = this.props;
    onClick(content);

  }

  displayImg = () => {
    const { content } = this.props;
    const { isShow } = this.state;
    const imgSrc = `https://img.youtube.com/vi/${content.id}/0.jpg`;
    const imgComponent = (
      <div>
        <img alt="thumbnail img" className="thumbnail" src={imgSrc} />
        {isShow
        ? (
          <div className="middle">
            <div className="text">
              {content.name}
            </div>
          </div>
        )
        : ''}
      </div>
      );

    return imgComponent;
  }


  render() {
   
    return (
      <div className="content" onMouseEnter={() => this.onHover()} onMouseLeave={() => this.onUnHover()}>
        {/* 홈 화면에서는  */}
        {this.props.onClick
          ? (<FullContentLink onChangeFullContent={this.onChangeFullContent}>{this.displayImg()}</FullContentLink>)
          : (<ContentView id={this.props.content.id}>{this.displayImg()}</ContentView>)}
      </div>
    );
  }
}

Content.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.object,
};


export default Content;
