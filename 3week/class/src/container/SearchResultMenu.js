import React, { Component } from 'react'
import Axios from 'axios';
import ContentList from '../component/contentList/ContentList.js';

export default class SearchResultMenu extends Component {
	constructor(props) {
        super(props);
        this.state = {
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

  //유튜브에 ajax 통신을 해서 데이터를 불러 오는 함수
    fetchYoutube = async () => {
        let maxResults = 30;
        let token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY";
        let keyword = this.props.match.params.id;
        try {
          const {data} = await Axios.get(
            'https://www.googleapis.com/youtube/v3/search?q='+
            keyword+'&part=snippet&key='+
            token+'&maxResults='+
            maxResults
                  )
            const list = this.setContents(data)//받아온 데이터를 내가 원하는 형태로 가공

            this.setState({// 가공한 데이터로 지금 바로 실행할 데이터와, 목록에 보여줄 데이터를 state에 저장
                contents:list.slice(1,list.length)//slice 함수는 배열형 데이터를 첫번째인자부터 두번째인자 전까지를 반환해주는 함수 입니다.
            })
        } catch(e) {
          console.log(e)
        }
    }
  
    render() {
        console.log(this.props);
      return (
        <div className="mainView">
             <ContentList contents={this.state.contents} />
        </div>
      );
    }
}
