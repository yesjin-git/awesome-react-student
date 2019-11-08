import React, { Component } from "react";
import ContentList from "../component/contentList/ContentList";
import axios from "axios";

export default class Search extends Component {
  state = {
    keyword: null,
    contents: []
  };

  handleChange = e => {
    this.setState({
      keyword: e.target.value
    });
    e.preventDefault();
  };

  handleSubmit = e => {
    this.fetchSearch(this.state.keyword);
    e.preventDefault();
  };

  fetchSearch = async keyword => {
    let maxResults = 30;
    let token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY";

    try {
      let {data} = await axios.get(
        "https://www.googleapis.com/youtube/v3/search?q=" +
          keyword +
          "&part=snippet&key=" +
          token +
          "&maxResults=" +
          maxResults
      );
      console.log(this.setContents(data));
      this.setState({ contents: this.setContents(data) }); 
    } catch {}   
  }; 
    

//   data 를 {id: ... , name:...} 형태로 가공해줌
  setContents = (data) => {
    let list = []
     data.items.forEach((item, index) => {
       if(item.id.videoId) {
         list.push({id:item.id.videoId,name:item.snippet.title})
       }
     }) 
     return list
 }
  

  render() {
    const { keyword, contents } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" value={keyword} onChange={handleChange} />
          </form>
        </div>
        {keyword} 
        <div className="content">
          <ContentList contents={contents} />
        </div>
      </div>
    );
  }
}