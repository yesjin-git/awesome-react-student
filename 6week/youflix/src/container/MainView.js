import React, { Component } from 'react';
import './MainView.css';
import ContentList from "../component/contentList/ContentList.js";
import FullContent from '../component/fullcontent/FullContent.js';
import { connect } from 'react-redux';
import { fetchContents, changeFullContent, removeContents } from "../actions";

class MainView extends Component {
//컴포넌트 렌더링이 완료된 후 유튜브에서 데이터 불러옴
  componentDidMount() {
    this.props.fetchContents()//mapDispatchToProps에서 선언한 유튜브데이터를 불러오는 액션
  }

//컴포넌트 종료시 contents 초기화
  componentWillUnmount() {
    this.props.removeContents()//mapDispatchToProps에서 선언한 contents를 초기화하는 액션
  }

//메인화면에서 영상을 실행하는 플레이어를 제어하는 함수
//이 함수를 이용해서 영상을 변경 한다.
  handleFullContentChange = (content) => {
    this.props.changeViewContent(content)//mapDispatchToProps에서 선언한 viewContent를 변환하는 액션
  }

  render() {
    return (
      <div className="mainView">
      	{/*
			영상을 실행 시키는 컴포넌트 
         redux로 부터 받은 currentViewContent를 props로 사용
      	*/}
      	<FullContent content={this.props.currentViewContent}/>
      	{/*
			실행할 영상 리스트를 출력하는 컴포넌트
        redux로 부터 받은 contents를 props로 사용
      	*/}
       	<ContentList contents={this.props.contents} onClick={this.handleFullContentChange} />
      </div>
    );
  }
}

//store의 state를 컴포넌트의 props로 전달 시켜줌
const mapStateToProps = (state) => {
  //store는 state를 리듀서 단위로 가지고 있어서 각각의 리듀서를 불러와서
  //컴포넌트에 props로 전달할 값들을 뽑아낸다.
  const { contentsByYoutube, selectedContent } = state
  const {
    isFetching,
    lastUpdated,
    items: contents,
  } = contentsByYoutube

  const { 
    viewContent: currentViewContent
  } = selectedContent

  return {
    isFetching,
    contents,
    lastUpdated,
    currentViewContent
  }
}

//action을 미리 dispatch해서 컴포넌트의 props로 전달 해주는 함수
const mapDispatchToProps = dispatch => ({
  fetchContents: () => dispatch(fetchContents()),
  changeViewContent: (content) => dispatch(changeFullContent(content)),
  removeContents : () => dispatch(removeContents())
});

//connect함수를 이용해 container component와 redux를 연결
//connect함수는 컴포넌트의 props와 store의 데이터를 연결 시켜주는 함수를 리턴
//mapStateToProps, MapDispatchToProps는 connect함수의 인자로 따로 선언해줘야 함
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView);
