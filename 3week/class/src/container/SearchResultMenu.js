import React, { Component } from 'react'
import Axios from 'axios';
import ContentList from '../component/contentList/ContentList.js';

export default class SearchResultMenu extends Component {
	constructor(props) {
        super(props);
        this.state = {
            fullContent: {},// 메인화면에 가장 큰 영상 플레이어 콘텐츠를 가지는 state
            contents : [] // 하단의 리스트에 들어갈 콘텐츠를 가지는 state
        };
  
      }
  
    setContents = (data) => { 
     let list = []
      data.items.forEach((item, index) => {
          list.push({id:item.id.videoId,title:item.snippet.title})
      })
      return list
    }
  
  //컴포넌트 렌더링이 완료된 후 유튜브에서 데이터 불러옴
    componentDidMount() {
        this.fetchYoutube();
    }
  
  //메인화면에서 영상을 실행하는 플레이어를 제어하는 함수
  //이 함수를 이용해서 영상을 변경 한다.
    handleFullContentChange = (content) => {
      this.setState({
        fullContent:content
      })
    }
  
  //유튜브에 ajax 통신을 해서 데이터를 불러 오는 함수
    fetchYoutube = () => {
        let maxResults = 30;
        let token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY";
        let fullAddress = window.location.href;
        let keyword = fullAddress.split("http://localhost:3001/").join("");
      Axios.get(
		'https://www.googleapis.com/youtube/v3/search?q='+
		keyword+'&part=snippet&key='+
		token+'&maxResults='+
		maxResults
          )
      .then(({data}) => {//유튜브로 부터 요청한 데이터를 전달 받으면 then으로 데이터를 받음
                          //디스트럭쳐링을 통해서 유튜브로부터 받은 데이터중에서 data만 가져옴 
  
          const list = this.setContents(data)//받아온 데이터를 내가 원하는 형태로 가공
  
          this.setState({// 가공한 데이터로 지금 바로 실행할 데이터와, 목록에 보여줄 데이터를 state에 저장
              contents:list.slice(1,list.length),//slice 함수는 배열형 데이터를 첫번째인자부터 두번째인자 전까지를 반환해주는 함수 입니다.
              fullContent:list[0]//가져온 데이터중 첫번째 데이터를 화면에서 실행 시킵니다.
          })
      })
    }
  
    render() {
        console.log("ddddddddddd");
      return (
        <div className="mainView">
             <ContentList contents={this.state.contents} />
        </div>
      );
    }
}
