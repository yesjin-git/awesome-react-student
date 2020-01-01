import React, { Component } from 'react';
import axios from 'axios'
import ContentList from '../component/contentList/ContentList.js'

export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contents : [] // 하단의 리스트에 들어갈 콘텐츠를 가지는 state
        };
      }
  
  // 서버로 부터 받은 데이터를 내가 원하는 형태로 변경 하는 함수
  // {id: , name: } 형식으로 모든 데이터들을 변환
    setContents = (data) => { 
     let list = []
      data.items.forEach((item, index) => {
          list.push({id:item.id,name:item.snippet.title})
      })
      return list
    }
  
  //컴포넌트 렌더링이 완료된 후 유튜브에서 데이터 불러옴
    componentDidMount() {
        this.fetchYoutube()
    }
  
  //유튜브에 ajax 통신을 해서 데이터를 불러 오는 함수
    fetchYoutube = () => {
        //axios를 이용해서 유튜브에 영상 목록을 달라고 요청
      axios.get('https://www.googleapis.com/youtube/v3/search?q=게임&part=snippet&chart=mostPopular&key=AIzaSyASlUxKp9-sRxTnJUghY0f9D0ia0Iqp91U&maxResults=30')
      .then(({data}) => {//유튜브로 부터 요청한 데이터를 전달 받으면 then으로 데이터를 받음
                          //디스트럭쳐링을 통해서 유튜브로부터 받은 데이터중에서 data만 가져옴 
  
          const list = this.setContents(data)//받아온 데이터를 내가 원하는 형태로 가공
  
          this.setState({// 가공한 데이터로 지금 바로 실행할 데이터와, 목록에 보여줄 데이터를 state에 저장
              contents:list.slice(1,list.length),//slice 함수는 배열형 데이터를 첫번째인자부터 두번째인자 전까지를 반환해주는 함수 입니다.
              fullContent:list[0]//가져온 데이터중 첫번째 데이터를 화면에서 실행 시킵니다.
          })
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

    render() {
        return (
            <div>
                <ContentList contents={this.state.contents} />
            </div>
        )
    }
}