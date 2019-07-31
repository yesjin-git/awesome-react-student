import React, {Component} from "react";
import Axios from "axios";
import ContentList from "../component/contentList/ContentList.js"
import FullContent from '../component/fullcontent/FullContent.js';

export default class Games extends Component{
    state={
      	fullContent: {},// 메인화면에 가장 큰 영상 플레이어 콘텐츠를 가지는 state
        contents:[],
        keyword: "game"
    };
    handleInputChange=e =>{
        this.setState({keyword:e.target.value});
    };
    componentDidMount = () =>{
  	    // this.fetchYoutube()
        this.fetchYoutube();
    };
    async fetchYoutube(){
        let maxResults = 30;
        let token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY"

        const {data} = await Axios.get(
            "https://www.googleapis.com/youtube/v3/search?q=" +
            this.state.keyword +
            "&part=snippet&key=" +
            token +
            "&maxResults=" +
            maxResults
        )
	    const list = this.setContents(data)//받아온 데이터를 내가 원하는 형태로 가공
        // console.log(this.state.contents)
	    this.setState({// 가공한 데이터로 지금 바로 실행할 데이터와, 목록에 보여줄 데이터를 state에 저장
	        contents:list.slice(1,list.length),//slice 함수는 배열형 데이터를 첫번째인자부터 두번째인자 전까지를 반환해주는 함수 입니다.
	        fullContent:list[0]//가져온 데이터중 첫번째 데이터를 화면에서 실행 시킵니다.
	    })

        // this.setState({contents: this.setContents(data)});
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
      	       <FullContent content={this.state.fullContent}/>
               <ContentList contents={this.state.contents}/>
            </div>
        )
    }
}