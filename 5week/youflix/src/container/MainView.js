import React, { Component } from 'react';
import ConetntList from "../component/contentList/ContentList.js";
import FullContent from '../component/fullcontent/FullContent.js';
import { connect } from 'react-redux';
import { fetchContents, changeFullContent } from '../actions';

import './MainView.css';

class MainView extends Component {


//컴포넌트 렌더링이 완료된 후 유튜브에서 데이터 불러옴
  componentDidMount() {
  	this.props.fetchContents();
  }

  render() {
		console.log(this.props);
    return (
      <div className="mainView">      
      	<FullContent content={this.props.fullContent}/>      	
       	<ConetntList contents={this.props.contents} onClick={this.props.handleFullContentChange}/>
      </div>
    );
  }
} 

//리듀서 이름으로 데이터가 반환됨 
//스토어에서 받은 데이터를 props로 전달
//state가 변경불가능 하도록
const mapStateToProps = state => {
	const { contentsByYoutube, selectedContent } = state;
	const { isFetching, lastUpdated, items: contents } = contentsByYoutube;
	const { fullContent } = selectedContent;
	return {
		isFetching,
		contents,
		lastUpdated,
		fullContent,		
	};
}

const mapDispatchToProps = dispatch => ({
	fetchContents: () => dispatch(fetchContents()),
	handleFullContentChange: (content) => dispatch(changeFullContent(content))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView); //connect:스토어랑 컴포넌트 연결
