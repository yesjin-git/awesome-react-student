import React, {Component} from "react";
import Axios from "axios";
import ContentList from "../component/contentList/ContentList.js"

export default class Search extends Component{
    state={
        contents:[],
        keyword: ""
    };
    handleInputChange=e =>{
        this.setState({keyword:e.target.value});
    };
    handleSubmit=e=>{
        this.fetchSearch(this.state.keyword);
        e.preventDefault();
    };
    async fetchSearch(keyword){
        let maxResults = 30;
        let token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY"

        const {data} = await Axios.get(
            "https://www.googleapis.com/youtube/v3/search?q=" +
            keyword +
            "&part=snippet&key=" +
            token +
            "&maxResults=" +
            maxResults
        )
        console.log(this.state.contents)

        this.setState({contents: this.setContents(data)});
    }
    setContents = data => {
        let list = [];
        data.items.forEach((item, index) => {
          if (item.id.videoId) {
            list.push({ id: item.id.videoId, name: item.snippet.title });
          }
        });
        return list;
      };
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Search</label>
                    <input 
                        type="text" 
                        value={this.state.keyword} 
                        onChange={this.handleInputChange}
                    />
                </form>
                <ContentList contents={this.state.contents}/>
            </div>
        )
    }
}