import React, { Component } from 'react';
import './App.css';
class Menu extends Component {
  /* html의 메인메뉴 구성을 하는 컴포넌트 */
  constructor(props){
    super(props)
  }
  render(){
    return(
      <table>
        <tr>
          <td><button>홈</button></td>
          <td><button>강사별</button></td>
          <td><button>프로젝트별</button></td>
          <td><button>후기</button></td>
        </tr>
      </table>
    )
  }
}
class App extends Component {
  /* KidsFunding 애플리케이션 컴포넌트 */
  constructor(props){
    super(props)
    this.state ={
      teachar : ["a"],
      proj : ["b"],
      proj_desc : ["c"],
      amount_coin : ["d"]
    }
  }
  render() {
    return (
      <div className="App">
        <h1>KidsFunding Application</h1>
        <hr/><State_platform /><hr/>         
        <Menu />
        <ListProject />
        <body>
          <h1>프로젝트 등록하기</h1>
          <Register />    
        </body>
      </div>
    );
  }
}
class Register extends Component{
  /* 프로젝트를 등록하는 컴포넌트 클래스
      form을 통해 프로젝트 데이터를 받는다. */
  render(){
    return(
      <form>
        <label>강사 : </label>
        <input type='text' value=' '/>
        <label>프로젝트 : </label>
        <input type='text' value=' '/>
        <label>개요 : </label>
        <input type='text' value=' '/>
        <label>목표코인량 : </label>
        <input type='text' value=' '/>
        <input type='submit' value='submit'/>
      </form>
    );
  }
}
class ListProject extends Component{
  /* 리스트로 보이는 project 컴포넌트 */
  render(){
    return(
      <table border='1px'>
        <tr>
          <tr>
            <th>강사</th>
            <td>남기승</td>
          </tr>
          <tr>
            <th>프로젝트</th>
            <td>책 1권씩 읽어주기</td>
          </tr>
          <tr>
            <th>설명</th>
            <td>내 수업을 듣는 어린이집 아이들에게 문학적 사고를 키워주고자 시작한 프로젝트</td>
          </tr>
          <tr>
            <th>투자현황</th>
            <td>0/50,000 coin</td>
          </tr>
        </tr>
      </table>
    )
  }
}
class State_platform extends Component{
  /* KidsFunding 사이트에 대한 현황판 컴포넌트
      현황판에 표시될 내용(총 프로젝트 수 / 총 트레이드중인 코인량)
  */
  render(){
    return(
      <div>
        <div>프로젝트 수 : 10개</div>
        <div>거래된 코인량 : 100바트</div>
      </div>
    )
  }
}
export default App;
