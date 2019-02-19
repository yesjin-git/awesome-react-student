import axios from 'axios';

//단순히 현재의 ui만 변경하면 굳이 리덕스에 보낼 필요없음, 데이터를 다룬다면 사용해야함
//action type
export const REQUEST_CONTENTS = "REQUEST_CONTENTS"; //유툽에 데이터 요청해라
export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS"; //유툽에서 데이터를 받았을때
export const CHANGE_FULL_CONTENT = "CHANGE_FULL_CONTENT"; //풀 컨텐트를 변경해라
export const CHANGE_KEYWORD = "CHANGE_KEYWORD";

//어떤 데이터를 저 명령으로 처리해라
//action creator
const requestContents = () => ({type: REQUEST_CONTENTS});
const receiveContents = contents => ({
  type: RECEIVE_CONTENTS,
  contents,
  receiveAt: Date.now()
});

export const changeFullContent = content => ({
  type: CHANGE_FULL_CONTENT,
  content
});

export const changeKeyword = keyword => ({
  type: CHANGE_KEYWORD,
  keyword
})



//비동기 액션 생성자 (미들웨어에서 실행될 부분)
// 액션을 실행시킬때 dispatch로 실행시켜야 스토어로 감
export const fetchContents = () => {
  return dispatch => {
    dispatch(requestContents());
    API().then(({data}) => {
      let contents = setContents(data);
      dispatch(receiveContents(contents));
      dispatch(changeFullContent(contents[0]));
    })
    .catch(e => {console.log(e);})
  }
}

export const fetchSearchContents = (keyword) => {
  return dispatch => {
    dispatch(requestContents());
    API(keyword).then(({data}) => {
      let contents = setSearchContents(data);
      dispatch(receiveContents(contents));
    })
    .catch(e => {console.log(e);})
  }
}

const setContents = (data) => { 
  let list = []
  data.items.forEach((item, index) => {
    list.push({id:item.id,name:item.snippet.title})
  });
  return list;
}

const setSearchContents = (data) => { 
  let list = []
  data.items.forEach((item, index) => {
    list.push({id:item.id.videoId ,name:item.snippet.title})
  });
  return list;
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
