import React, { Component } from 'react';
import './ContentView.css';

// 영상 리스트를 눌렀을때 플레이어 화면만 보여주고 싶을때 사용하는 컴포넌트

//App.js에서 라우팅시켜주는 컴포넌트, Content나 MainView의 하위컴포넌트가 아니다. 
class ContentView extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="ContentView">
        {/*
          유튜브를 실행 시키기 위해서는 iframe을 사용해야 하는데, 유튜브 api로 실행 시킬 주소를 받아와서
          iframe으로 실행 시킨다.
        */}
       	<iframe
         title={this.props.match.params.id}
         className="content-view-iframe"
         frameBorder="0"
         width="100%"
         height="100vw"
         src={`https://www.youtube.com/embed/${this.props.match.params.id}`}
         allowFullScreen={true}
         allow="autoplay; encrypted-meida"
      		/>
      </div>
    );
  }
}

export default ContentView;
