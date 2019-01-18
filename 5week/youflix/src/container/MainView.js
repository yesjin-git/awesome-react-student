import React, { Component } from 'react';
import './MainView.css';
import ConetntList from "../component/contentList/ContentList.js";
import FullContent from '../component/fullcontent/FullContent.js';
import axios from 'axios';
import {
  fetchContents,
  changeFullContent
} from "../actions.js";
import { connect } from "react-redux";

class MainView extends Component {

//컴포넌트 렌더링이 완료된 후 유튜브에서 데이터 불러옴
  componentDidMount() {
    this.props.fetchContents()
  }

//메인화면에서 영상을 실행하는 플레이어를 제어하는 함수
//이 함수를 이용해서 영상을 변경 한다.
  handleFullContentChange = (content) => {
    this.props.changeViewContent(content)
  }

  render() {
    console.log(this.props)
    return (
      <div className="mainView">
      	{/*
			영상을 실행 시키는 컴포넌트 
      	*/}
      	<FullContent content={this.props.fullContent}/>
      	{/*
			실행할 영상 리스트를 출력하는 컴포넌트
      	*/}
       	<ConetntList contents={this.props.contents} onClick={this.handleFullContentChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { contentsByYoutube, selectedContent } = state

  const {
    isFetching,
    lastUpdated,
    items: contents,
  } = contentsByYoutube

  const {
    viewContent: fullContent
  } = selectedContent

  return {
    contents,
    fullContent
  }
}

const mapDispatchToProps = dispatch => ({
  fetchContents: () => dispatch(fetchContents()),
  changeViewContent: (content) => dispatch(changeFullContent(content))
});

export default connect(  
  mapStateToProps,
  mapDispatchToProps)(MainView);
