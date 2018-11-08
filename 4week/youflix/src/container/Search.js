import React, { Component } from 'react';
import './Search.css';
import ConetntList from "../component/contentList/ContentList.js";
import axios from 'axios';

class Search extends Component {
	constructor(props) {
	  super(props);
     
    this.state = {
      contents : [],
      keyword: ""
    };

	}

  selectContents = (array, count) => {
    return array.slice(1,count)
  }

  handleInput = (e) => {
    this.setState({keyword:e.target.value})
  }

  handleSubmit = (e) => {
    this.fetchSearch(this.state.keyword)
    e.preventDefault();
  }

  fetchSearch = (keyword) => {
    let maxResults = 20
    let token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY'
    axios.get('https://www.googleapis.com/youtube/v3/search?q='+keyword+'&part=snippet&key='+token+'&maxResults='+maxResults)
    .then(({data}) => {
      return this.setContents(data)
    })
    .then(list => {
      this.setState({contents:list})
    })

  }

  setContents = (data) => {
     let list = []
      data.items.forEach((item, index) => {
        if(item.id.videoId) {
          list.push({id:item.id.videoId,name:item.snippet.title})
        }
      })
      return list
  }

  componentWillUnmount() {
    console.log("Sdfsdf")
  }

  render() {
    return (
      <div className="Search ">
        <form className="" onSubmit={this.handleSubmit}>
          <div className="form-group row align-items-center justify-content-center">
            <div className="col-md-3">
              <label>검색</label>
              <input type="text" className="form-control keyword" value={this.state.keyword} onChange={this.handleInput} placeHolder="Seacrh..."/>
            </div>
          </div>
        </form>

        <ConetntList contents={this.state.contents} />
      </div>
    );
  }
}

export default Search;
