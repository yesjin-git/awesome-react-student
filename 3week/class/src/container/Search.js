import React, { Component } from "react";
import Axios from "axios";
import ContentList from "../component/contentList/ContentList";
import "./Search.css";
import "tachyons";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      contents: []
    };
  }

  handleInputChange = e => {
    this.setState({ keyword: e.target.value });
  };

  handleSubmit = e => {
    this.fetchSearch(this.state.keyword);
    e.preventDefault();
  };

  fetchSearch = keyword => {
    let maxResults = 28;
    let token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY";

    Axios.get(
      "https://www.googleapis.com/youtube/v3/search?q=" +
        keyword +
        "&part=snippet&key=" +
        token +
        "&maxResults=" +
        maxResults
    ).then(({ data }) => {
      const list = this.setContents(data);

      this.setState({ contents: list });
    });
  };

  setContents = data => {
    let list = [];
    data.items.forEach((item, index) => {
      list.push({ id: item.id.videoId, name: item.snippet.title });
    });
    return list;
  };

  render() {
    return (
      <div className="mt-3">
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.keyword}
              onChange={this.handleInputChange}
              placeholder="Search"
              className="search_input"
            />
          </form>
          <ContentList contents={this.state.contents} />
        </div>
      </div>
    );
  }
}
