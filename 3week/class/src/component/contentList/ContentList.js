import React, { Component } from 'react';
import './ContentList.css';
import Content from "../content/Content.js"
import PropTypes from "prop-types";

//콘텐츠의 리스트를 보여주는 컴포넌트
class ContentList extends Component {

  //한줄에 4개의 콘텐츠를 출력 하기 위해서 컴포넌트를 구성해주는 함수
  listRender() {
    // console.log(this.props.contents)
  	var count = Math.ceil(this.props.contents.length/4)//현재 콘텐츠를 한줄에 4개씩 보여주면 몇줄이 나오는지를 구함
  	let component = [] //컴포넌트를 담을 배열 선언
  	for(let i =0;i<count;i++) {//반복문을 이용해서 한줄씩 컴포넌트를 만들어줌
  		let dataPerRow = this.props.contents.slice(i*4,i*4+4)//slice를 이용해서 그 줄에 들어가야 하는 데이터를 반환받음
                                                    //현재줄*4번째 부터 현재줄*4+4 하면 0번째 줄일때는 0부터 3까지
                                                    //1번째 줄일때는 4부터 7까지의 데이터를 불러온다.

      //위에서 선언한 배열에 한줄을 구성하는 컴포넌트를 push한다.
      //push는 배열의 맨뒤에 데이터를 넣을때 사용 하는 함수이다.
      //이런 식으로 컴포넌트를 추가 가능한 이유는 첫번째 시간에 말했던것 처럼 jsx는 결국 js를 좀더 편리하게 보여주는 역할일뿐
      //결국 jsx가 읽혀질때는 xml형태의 js로 변환되기 때문이다.
  		component.push(
        // row는 부트스트랩에서 한줄을 의미 하는 class이다.
  			<div className="row">
  				{
            //위에서 4개의 데이터를 뽑아서 저장해 가지고 있던 배열을 map을 이용해서 4개의 콘텐츠를 그려준다.
  					dataPerRow.map((item,index) => {
			      		return (
                  // 반복문 안에서 jsx를 사용할때는 반드시 key를 써줘야 한다.
                  // col-md-3은 한 줄을 12등분 했을때 3칸만큼을 차지 하겠다는 의미이다.
			      		  <div className="col-md-3" key={index}>
					      	  {/* 
                      콘텐츠를 표현해주는 content component를 선언하는데 이때 onClick이벤트를 props로 넘겨준다.
                      이 이벤트는 콘텐츠를 눌렀을때 상단의 실행되는 플레이어를 변경하는 이벤트 이다.
                    */}
                    <Content content={item} onClick={this.props.onClick}/>
					        </div>
			      		)
			      	})
  				}
  			</div>
  		)
  	}

  	return component
  }	
  render() {
  	

    return (
      <div className="contentList align-items-center justify-content-center">
	      {/*
          리스트를 렌더링해주는 함수를 실행 시킨다.
        */}
        {this.listRender()}
      </div>
    );
  }
}

ContentList.propTypes = {
  contents: PropTypes.array,
  onClick: PropTypes.func
}

export default ContentList;
