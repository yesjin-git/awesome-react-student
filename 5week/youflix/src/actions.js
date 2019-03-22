import axios from 'axios';

// action type: 어떤 명령을 할 건지 상수로 미리 선언
export const REQUEST_CONTENTS = "REQUEST_CONTENTS";
export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS";
export const CHANGE_FULL_CONTENT = "CHANGE_FULL_CONTENT";

// action creator(액션 생성자)
const requestContents = () => ({ type: REQUEST_CONTENTS });
const receiveContents = contents => ({
    type: RECEIVE_CONTENTS,
    contents: contents,
    receiveAt: Date.now()
});

export const changeFullContent = content => ({
    type: CHANGE_FULL_CONTENT,
    content: content
})

const setContents = (data) => { 
    let list = []
     data.items.forEach((item, index) => {
         list.push({id:item.id,name:item.snippet.title})
     })
     return list
}

export const fetchContents = () => {
    return dispatch => {
        dispatch(requestContents());
        API().then(({data}) => {
            let contents = setContents(data);
            console.log("actions.js")
            console.log(contents)
            dispatch(receiveContents(contents));
            dispatch(changeFullContent(contents[0]));
          })
          .catch(e => {console.log(e);})
    }
}

const maxResult = 30;
const token = "AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY";


const API = (keyword) => {
    let url = '';
    if(keyword){
      url = `https://www.googleapis.com/youtube/v3/search?q=${keyword}&part=snippet&key=${token}&maxResults=${maxResult}`
    }else {
      url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${token}&maxResults=${maxResult}`;
    }
    return axios.get(url);
  }
  
