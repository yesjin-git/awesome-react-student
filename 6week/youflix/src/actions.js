import axios from "axios";

//action type
export const REQUEST_CONTENTS = "REQUEST_CONTENTS";
export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS";
export const REMOVE_CONTENTS = "REMOVE_CONTENTS";
export const CHANGE_FULL_CONTENT = "CHANGE_FULL_CONTENT";
export const CHANGE_KEYWORD = "CHANGE_KEYWORD";

//액션생성자(action creator)
//어떤 데이터를 변경할 건지를 정의 하는 부분
const requestContents = () => ({type: REQUEST_CONTENTS})
const receiveContents = (content) => ({
	type:RECEIVE_CONTENTS, 
	contents: content,
	receiveAt: Date.now()
	})

export const removeContents = () => ({
	type:REMOVE_CONTENTS,
})

export const changeFullContent = (content) => ({
	type: CHANGE_FULL_CONTENT,
	content : content
})

export const changeKeyword = (keyword) => ({
	type: CHANGE_KEYWORD,
	keyword
})

const token = 'AIzaSyAsNDtwveKzPT0SWzREwuBpmswH18CIffg'
const maxResults = 30

//비동기 action creator로 유튜브로부터 데이터를 ajax통신으로 받아와서
//동기 action creator를 dispatch해서 데이터를 변화시킴
export const fetchContents = () => {
	return dispatch => {
		dispatch(requestContents())
		return API({token,maxResults})
			.then(({data}) => setContents(data))
			.then(contents => {
				dispatch(changeFullContent(contents[0]))
				dispatch(receiveContents(contents.slice(1,contents.length)))
			})
			.catch(e => {
				console.log(e)
			})
	}
}

//비동기 action creator로 유튜브로부터 데이터를 ajax통신으로 받아와서
//동기 action creator를 dispatch해서 데이터를 변화시킴
export const fetchSearchContent = (keyword) => {
	return dispatch => {
		dispatch(requestContents())
		return API({token,maxResults,keyword})
			.then(({data}) => setSearchContents(data))
			.then(contents => {
				dispatch(receiveContents(contents))
			})
			.catch(e => {
				console.log(e)
			})
	}
}

//youtube와 ajax통신할때 공통적으로 사용하는 로직을 함수로 구현
const API = ({keyword="", token="", maxResults=30}) => {
	const URL = "https://www.googleapis.com/youtube/v3/"

	if( keyword === "" ) {
		var api = URL+`videos?part=snippet&chart=mostPopular&key=${token}&maxResults=${maxResults}`
	} else  {
		var api = URL+`search?q=${keyword}&part=snippet&key=${token}&maxResults=${maxResults}`
	}

	return axios.get(api)
}

//mainView의 화면에 들어가는 데이터를 파싱
 const setContents = (data) => { 
   let list = []
   console.log(data)
    data.items.forEach((item, index) => {
        list.push({id:item.id,name:item.snippet.title})
    })
    return list
  }

//search 컴포넌트에 들어가는 데이터를 파싱
 const setSearchContents = (data) => { 
   let list = []
   console.log(data)
    data.items.forEach((item, index) => {
        list.push({id:item.id.videoId,name:item.snippet.title})
    })
    return list
  }