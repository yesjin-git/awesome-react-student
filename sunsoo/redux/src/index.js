import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
	// 모든 컴포넌트에서 react router가 동작하기 위해서는 최상위 컴포넌트를 
	//BrwoserRouter로 감싸야함
	<Provider store={store()}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
