import React, { Component } from 'react';
import "./FullContent.css";
import PropTypes from "prop-types";

//홈화면에서 영상을 실행시키는 컴포넌트
class FullContent extends Component {
  render() { 
    return (
      <div className="FullContent">
      	{/*
          유튜브를 실행 시키기 위해서는 iframe을 사용해야 하는데, 유튜브 api로 실행 시킬 주소를 받아와서 
          iframe으로 실행 시킨다.
        */}
        <iframe
      		className="my-iframe"
      		frameBorder="0"
      		src={"https://www.youtube.com/embed/"+this.props.content.id+"?autoplay=1&rel=0"}
      		allowFullScreen={true}
      		allow="autoplay"
      		/>
      </div>
    );
  }
}

FullContent.propTypes = {
  content: PropTypes.object
}

export default FullContent;
