import React, { Component } from 'react';
import ContentList from '../component/contentList/ContentList';
import { connect } from 'react-redux';
import { fetchSearchContents, changeKeyword } from '../actions';

class Search extends Component {

  handleSubmit = e => {
    this.props.fetchSearchContents(this.props.keyword);
    e.preventDefault();
  }

  render() {
    const { contents, handleInputChange } = this.props;
    const { handleSubmit } = this;
    return (
      
      <div className="search">
        <form onSubmit={handleSubmit}>
          <div className="form-group row align-items-center justify-content-center">
            <div className="col-md-3">
              <label>검색</label>
              <input 
                type="text"
                className="form-control keyword"
                placeholder="Search..."
                onChange={handleInputChange}
              />
            </div>
          </div>
        </form>
        <ContentList contents={contents} />
      </div>
      
    );
  }
}


//리듀서 이름으로 데이터가 반환됨 
//스토어에서 받은 데이터를 props로 전달
//state가 변경불가능 하도록
const mapStateToProps = state => {
	const { contentsByYoutube, selectedKeyword } = state;
	const { isFetching, lastUpdated, items: contents } = contentsByYoutube;
	const { keyword } = selectedKeyword;
	return {
		isFetching,
		contents,
		lastUpdated,
		keyword,		
	};
}

const mapDispatchToProps = dispatch => ({
	fetchSearchContents: (keyword) => dispatch(fetchSearchContents(keyword)),
	handleInputChange: (e) => dispatch(changeKeyword(e.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);