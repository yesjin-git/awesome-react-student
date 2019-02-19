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
  	for(let i =0; i<count; i++) {//반복문을 이용해서 한줄씩 컴포넌트를 만들어줌
  		let dataPerRow = this.props.contents.slice(i*4,(i+1)*4)
  		component.push(
  			<div className="row" key={i}>
  				{            
  					dataPerRow.map((item,index) => {
              return (                
                <div className="col-md-3" key={index}>
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
