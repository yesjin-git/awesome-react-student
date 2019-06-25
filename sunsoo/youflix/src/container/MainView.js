import React, { Component } from 'react';
import './MainView.css';
import ConetntList from "../component/contentList/ContentList.js";
import FullContent from '../component/fullcontent/FullContent.js';
import axios from 'axios';

class MainView extends Component {
	constructor(props) {
	  super(props);

	  // this.src = [
	  //   {
	  //   	name: "[Official MV] MOMMY SON (마미손) - 소년점프 (feat. 배기성)",
	  //   	src: "https://www.youtube.com/embed/D3ZFtSoWtRc",
	  //   	id: "D3ZFtSoWtRc"
	  //   },
	  //   {
	  //   	name: "수면유도400% 우주다큐멘터리 꿀잠 수면영상 우주의끝을 찾아서 (광고X)",
	  //   	src: "https://www.youtube.com/embed/gcUAj4x2IVo",
	  //   	id: "gcUAj4x2IVo"
	  //   },
	  //   {
	  //   	name: "사진 실력을 한번에 2배로 끌어올릴 수 있는 연습법, 빛 읽기! I Hury 태영작가",
	  //   	src: "https://www.youtube.com/embed/tHzcoVm7LtQ",
	  //   	id: "tHzcoVm7LtQ"
	  //   },
	  //   {
	  //   	name: "라이트룸 인물 보정에 대한 모든 것, 이거 하나로 그냥 끝내기 Lightroom Portrait Edit I Hury 태영작가",
	  //   	src: "https://www.youtube.com/embed/onfI6B19dR4",
	  //   	id: "onfI6B19dR4"
	  //   },
	  //   {
	  //   	name: "About Time - How Long Will I Love You",
	  //   	src: "https://www.youtube.com/embed/iQop_qs4xV4",
	  //   	id: "iQop_qs4xV4"
	  //   },
	  //   {
	  //   	name: "Sam Smith - I'm Not The Only One",
	  //   	src: "https://www.youtube.com/embed/nCkpzqqog4k",
	  //   	id: "nCkpzqqog4k"
	  //   },
	  //   {
	  //   	name: "[천우희] 출중한 여자의 나혼자 요리하기 (※심쿵주의보 발령※)",
	  //   	src: "https://www.youtube.com/embed/zfSIOeIJejc",
	  //   	id: "zfSIOeIJejc"
	  //   },
	  //   {
	  //   	name: "눈 속에서의 부쉬 크래프트 캠프 - 불, 대피소, 도끼, 요리 생선",
	  //   	src: "https://www.youtube.com/embed/A3VdFB6QWt0",
	  //   	id: "A3VdFB6QWt0"
	  //   },
	  //   {
	  //   	name: " [KOR SUB] 다이어트에 성공하는 네 가지 쉬운 단계들(How To Lose Weight in 4 Easy Steps!",
	  //   	src: "https://www.youtube.com/embed/yTbpFZ0mrEQ",
	  //   	id: "yTbpFZ0mrEQ"
	  //   },
	  //   {
	  //   	name: " 레이먼킴이 알려주는 완벽한 스테이크 굽는 법 (Feat. 포터하우스, 토마호크 스테이크)",
	  //   	src: "https://www.youtube.com/embed/PhftrtBetQ4",
	  //   	id: "PhftrtBetQ4"
	  //   },
	  //   {
	  //   	name: "[최마태] 스마트폰/폰카로 사진 잘 찍는 4가지 방법 #1 (feat. Ripple_s 미나, 민욱, 아이폰)",
	  //   	src: "https://www.youtube.com/embed/pOL_fJi3Od8",
	  //   	id: "pOL_fJi3Od8"
	  //   }
   //  ]
      this.state = {
      	fullContent: {},// 메인화면에 가장 큰 영상 플레이어 콘텐츠를 가지는 state
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

//메인화면에서 영상을 실행하는 플레이어를 제어하는 함수
//이 함수를 이용해서 영상을 변경 한다.
  handleFullContentChange = (content) => {
    this.setState({
      fullContent:content
    })
  }

//유튜브에 ajax 통신을 해서 데이터를 불러 오는 함수
  fetchYoutube = () => {
  	//axios를 이용해서 유튜브에 영상 목록을 달라고 요청
    axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY&maxResults=21')
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
    return (
      <div className="mainView">
      	{/*
			영상을 실행 시키는 컴포넌트 
      	*/}
      	<FullContent content={this.state.fullContent}/>
      	{/*
			실행할 영상 리스트를 출력하는 컴포넌트
      	*/}
       	<ConetntList contents={this.state.contents} onClick={this.handleFullContentChange} />
      </div>
    );
  }
}

export default MainView;
