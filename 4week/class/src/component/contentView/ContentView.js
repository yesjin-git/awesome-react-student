import React, { Component } from 'react';
import "./ContentView.css";

//영상 리스트를 눌렀을때 플레이어 화면만 보여주고 싶을때 사용하는 컴포넌트
class ContentView extends Component {
  render() {

    return (
      <div className="ContentView">
        {/*
          유튜브를 실행 시키기 위해서는 iframe을 사용해야 하는데, 유튜브 api로 실행 시킬 주소를 받아와서 
          iframe으로 실행 시킨다.
        */}
       	<iframe
       		className="content-view-iframe"
      		frameBorder="0"
      		width="100%" height="100vw"
      		src={"https://www.youtube.com/embed/"+this.props.match.params.id}
      		allowFullScreen={true}
      		allow="autoplay; encrypted-meida"
      		/>
      </div>
    );
  }
}

export default ContentView;
