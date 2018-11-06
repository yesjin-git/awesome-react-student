import React, { Component } from 'react';
import './Search.css';
import ConetntList from "../component/contentList/ContentList.js";

class Search extends Component {
	constructor(props) {
	  super(props);
     this.src = [
      {
        name: "[Official MV] MOMMY SON (마미손) - 소년점프 (feat. 배기성)",
        src: "https://www.youtube.com/embed/D3ZFtSoWtRc",
        id: "D3ZFtSoWtRc"
      },
      {
        name: "수면유도400% 우주다큐멘터리 꿀잠 수면영상 우주의끝을 찾아서 (광고X)",
        src: "https://www.youtube.com/embed/gcUAj4x2IVo",
        id: "gcUAj4x2IVo"
      },
      {
        name: "사진 실력을 한번에 2배로 끌어올릴 수 있는 연습법, 빛 읽기! I Hury 태영작가",
        src: "https://www.youtube.com/embed/tHzcoVm7LtQ",
        id: "tHzcoVm7LtQ"
      },
      {
        name: "라이트룸 인물 보정에 대한 모든 것, 이거 하나로 그냥 끝내기 Lightroom Portrait Edit I Hury 태영작가",
        src: "https://www.youtube.com/embed/onfI6B19dR4",
        id: "onfI6B19dR4"
      },
      {
        name: "About Time - How Long Will I Love You",
        src: "https://www.youtube.com/embed/iQop_qs4xV4",
        id: "iQop_qs4xV4"
      },
      {
        name: "Sam Smith - I'm Not The Only One",
        src: "https://www.youtube.com/embed/nCkpzqqog4k",
        id: "nCkpzqqog4k"
      },
      {
        name: "[천우희] 출중한 여자의 나혼자 요리하기 (※심쿵주의보 발령※)",
        src: "https://www.youtube.com/embed/zfSIOeIJejc",
        id: "zfSIOeIJejc"
      },
      {
        name: "눈 속에서의 부쉬 크래프트 캠프 - 불, 대피소, 도끼, 요리 생선",
        src: "https://www.youtube.com/embed/A3VdFB6QWt0",
        id: "A3VdFB6QWt0"
      },
      {
        name: " [KOR SUB] 다이어트에 성공하는 네 가지 쉬운 단계들(How To Lose Weight in 4 Easy Steps!",
        src: "https://www.youtube.com/embed/yTbpFZ0mrEQ",
        id: "yTbpFZ0mrEQ"
      },
      {
        name: " 레이먼킴이 알려주는 완벽한 스테이크 굽는 법 (Feat. 포터하우스, 토마호크 스테이크)",
        src: "https://www.youtube.com/embed/PhftrtBetQ4",
        id: "PhftrtBetQ4"
      },
      {
        name: "[최마태] 스마트폰/폰카로 사진 잘 찍는 4가지 방법 #1 (feat. Ripple_s 미나, 민욱, 아이폰)",
        src: "https://www.youtube.com/embed/pOL_fJi3Od8",
        id: "pOL_fJi3Od8"
      }
    ]

    this.state = {
      fullContent: {},
      contents : this.selectContents(this.src,7)
    };

	}

 shuffleArray = (array) => {
    for(let i = array.length -1; i > 0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      [array[i], array[j]] = [array[j], array[i]]
    }
  }

  selectContents = (array, count) => {
    return array.slice(1,count)
  }
  render() {
    return (
      <div className="Search ">
        <form className="">
          <div className="form-group row align-items-center justify-content-center">
            <div className="col-md-3">
              <label>검색</label>
              <input type="text" className="form-control" placeHolder="Seacrh..."/>
            </div>
          </div>
        </form>

        <ConetntList contents={this.state.contents} />
      </div>
    );
  }
}

export default Search;
