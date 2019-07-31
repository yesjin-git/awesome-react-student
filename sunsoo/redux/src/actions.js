import axios from "axios";

export const REQUEST_CONTENTS = "REQUEST_CONTENTS"
export const RECEIVE_CONTENTS = "RECEIVE_CONTENTS"
export const CHANGE_FULL_CONTENT = "CHANGE_FULL_CONTENT"

const requestContents = () => ({ type: REQUEST_CONTENTS });
const receiveContents = (contents) => ({
    type: RECEIVE_CONTENTS,
    contents: contents,
    receiveAt: Date.now()
});

export const changeFullContent = content => ({
    type: CHANGE_FULL_CONTENT,
    content: content,
});

const maxResults = 30
const token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY'//본인의 토큰을 발급 받아서 입력

// 비동기 액션
export const fetchContent = () => {
    return async dispatch => {
        dispatch(requestContents());
        try {
            const {data} = await API({token, maxResults});
            const contents = setContents(data);
            dispatch(changeFullContent(contents[0]));
            dispatch(receiveContents(contents.slice(1, contents.length)));
        } catch(e) {
            console.log(e);
        }
    };
};

const API = ({token="",maxResults=30}) => {
    const URL = "https://www.googleapis.com/youtube/v3/";

    return axios.get(
        URL+
            `videos?part=snippet&chart=mostPopular&key=${token}&maxResults=${maxResults}`
    );
}

const setContents = data => { 
    let list = [];
    data.items.forEach((item, index) => {
        list.push({id:item.id, name:item.snippet.title})
    });
    return list;
}