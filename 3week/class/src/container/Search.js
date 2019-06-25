import React, { Component } from 'react';
import ContentList from "../component/contentList/ContentList";
import Youtube from "../request/Youtube";

export default class Search extends Component {
  state = {
    contents: [],
    keyword: null,
  };

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  handleSubmit = (e) => {
    this.fetchSearch(this.state.keyword);
    e.preventDefault();
  };

  fetchSearch = async (keyword) => {
    let oYoutube = new Youtube();
    let videoList = await oYoutube.getVideoList(keyword);

    this.setState({ contents: oYoutube.conversionData(videoList) });
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>검색</label>
          <input
            type="text"
            value={this.state.keyword}
            onChange={this.handleInputChange}
          />
        </div>
      </form>
      <ContentList contents={this.state.contents} />
    </div>;
  }
};