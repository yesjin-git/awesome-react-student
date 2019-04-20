import React, { Component } from 'react';
import './FullContent.css';
import PropTypes from 'prop-types';

//홈화면에서 영상을 실행시키는 컴포넌트
class FullContent extends Component {
  // constructor() {
  //   super();
  //   //props를 넣어주지 않으면 생성자 안에서 this.props 이런 식으로 접근할 수 없다.
  // }

  render() {
    console.log(this.props)
    return (
      <div className="FullContent">
        {/*
          유튜브를 실행 시키기 위해서는 iframe을 사용해야 하는데, 유튜브 api로 실행 시킬 주소를 받아와서 
          iframe으로 실행 시킨다.
        */}
        <iframe
          title={this.props.content.id}
          className="my-iframe"
          frameBorder="0"
          src={
            'https://www.youtube.com/embed/' +
            this.props.content.id +
            '?autoplay=0&rel=0'
          }
          allowFullScreen={true}
          allow="autoplay"
        />
      </div>
    );
  }
}

FullContent.propTypes = {
  content: PropTypes.object
};

export default FullContent;
