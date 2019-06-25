import axios from 'axios';

export default class Youtube {
  constructor() {
    this.token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY';
  }

  /*비디오 목록 가져오기*/
  getVideoList(keyword, maxResults = 30) {
    const url = "https://www.googleapis.com/youtube/v3/search?";

    return (async () => {
      try {
        const {data} = await axios.get(url +
          'q=' + keyword +
          '&part=snippet&key=' + this.token +
          '&maxResults=' + maxResults
        );
        return this.conversionData(data);
      } catch (e) {
        console.log(e);
        alert("비디오 목록을 가져오는데 실패하였습니다. 관리자에게 문의하세요.");
      }
    })().then(
      (list) => {
        return list;
      }
    )
  }

  /*응답 data 변환*/
  conversionData = (data) => {
    let list = [];

    data.items.forEach((item, index) => {
      if(item.id.videoId) {
        list.push({id:item.id.videoId,name:item.snippet.title})
      }
    });

    return list
  };
};