import React, { Component} from "react"
import ContentList from "../component/contentList/ContentList.js";
import axios from "axios";

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
          contents : [],
          keyword: ""
        };
    }

    handleInputChange = (e) => {
      this.setState({keyword:e.target.value})
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

   handleSubmit = (e) => {
    this.fetchSearch(this.state.keyword)
    e.preventDefault();
  }

    fetchSearch = (keyword) => {
      let maxResults = 30
      let token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY'//본인의 토큰을 발급 받아서 입력
      axios.get('https://www.googleapis.com/youtube/v3/search?q='+keyword+'&part=snippet&key='+token+'&maxResults='+maxResults)
      .then(({data}) => {
        const list = this.setContents(data)
        this.setState({contents:list})
      })
    }

    render() {
        return (
          <div className="Search">
            <form className="" onSubmit={this.handleSubmit}>
              <div className="form-group row align-items-center justify-content-center">
                <div className="col-md-3">
                  <label>검색</label>
                  <input value={this.state.keyword} onChange={this.handleInputChange} type="text" className="form-control keyword" placeHolder="Seacrh..."/>
                </div>
              </div>
            </form>

            <ContentList contents={this.state.contents} />
          </div>
        );
      }
 }

 export default Search;