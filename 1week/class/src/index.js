import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//브라우저 상에 리액트 컴포넌트를 보여주기 위해 사용
//첫번째 파라미터는 보여주고 싶은 컴포넌트, 두번째는 html파일에 있는 어떤 dom에 그릴지 정해줌
//id가 root인 dom을 찾아서 그리도록 설정 public/index.html에 서 볼수 있다.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
