import React, { Component } from 'react'
import Axios from 'axios';
import ConetentList from "../component/contentList/ContentList";
import Content from '../component/content/Content';
import ContentList from '../component/contentList/ContentList';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      contents: []
    }
  }

  handleInputChange=(e) => {
    this.setState({keyword: e.target.value});
  }

  handleSubmit = (e) => {
    this.fetchSearch(this.state.keyword);
    e.preventDefault();
  }

  fetchSearch = (keyword) => {
    let maxResults = 30;
    let token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY';

    Axios
      .get('https://www.googleapis.com/youtube/v3/search?q='+
      keyword+
      '&part=snippet&key='+
      token+
      '&maxResults='+
      maxResults)
      .then(({data}) => {
        const list = this.setContents(data);

        this.setState({ contents: list });
      });
  }

  setContents = (data) => { 
    let list = []
     data.items.forEach((item, index) => {
         list.push({id:item.id.videoId, name:item.snippet.title})
     })
     return list;
   }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label> 검색 : </label>
            <input 
              type="text" 
              value={this.state.keyword}
              onChange={this.handleInputChange} 
            />
          </form>
          <ContentList contents={this.state.contents} />
        </div>
      </div>
    )
  }
}
