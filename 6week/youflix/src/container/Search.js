import React , { Component } from 'react'
import ContentList from "../component/contentList/ContentList.js"
import { connect } from "react-redux"
import { fetchSearchContent,changeKeyword } from "../actions"

class Search extends Component {
	constructor(props) {
	  super(props);
    //keyword를 입력받기 위한 state
	  this.state = {
	  	keyword: ""
	  };
	}

	handleInputChange = (e) => {
    	this.setState({keyword:e.target.value})
  }

  //입력받은 키워드를 submit할때 redux에서 관리하는 keyword로 
  //state.keyword를 전달
  handleSubmit = (e) => {
    this.props.changeKeyword(this.state.keyword)
    e.preventDefault();
  }


  //redux에 의해서 props.keyword가 업데이트 되면
  //키워드로 유튜브의 동영상을 검색하는 액션 실행
  componentDidUpdate(prevProps) {
    if(this.props.keyword !== prevProps.keyword) {
      this.props.fetchSearchContent(this.props.keyword)
    }
  }

	render() {
		return (
			<div className="Search">
            <form className="" onSubmit={this.handleSubmit}>
              <div className="form-group row align-items-center justify-content-center">
                <div className="col-md-3">
                  <label>검색</label>
                  <input type="text" value={this.state.keyword} onChange={this.handleInputChange} className="form-control keyword" placeHolder="Seacrh..."/>
                </div>
              </div>
            </form>

            <ContentList contents={this.props.contents} />
          </div>		
	    )
	}
}
//store의 state를 컴포넌트의 props로 전달 시켜줌
const mapStateToProps = state => {
  //store는 state를 리듀서 단위로 가지고 있어서 각각의 리듀서를 불러와서
  //컴포넌트에 props로 전달할 값들을 뽑아낸다.
  const { contentsByYoutube, selectedKeyword } = state
  const { keyword } = selectedKeyword
  const {
    isFetching,
    lastUpdated,
    items: contents,
  } = contentsByYoutube

  return {
    keyword,
    isFetching,
    lastUpdated,
    contents
  }
}

//action을 미리 dispatch해서 컴포넌트의 props로 전달 해주는 함수
const mapDispatchToProps = dispatch => ({
  changeKeyword:(keyword) => dispatch(changeKeyword(keyword)),
  fetchSearchContent: (keyword) => dispatch(fetchSearchContent(keyword))
});

//connect함수를 이용해 container component와 redux를 연결
//connect함수는 컴포넌트의 props와 store의 데이터를 연결 시켜주는 함수를 리턴
//mapStateToProps, MapDispatchToProps는 connect함수의 인자로 따로 선언해줘야 함
export default connect(mapStateToProps,mapDispatchToProps)(Search);