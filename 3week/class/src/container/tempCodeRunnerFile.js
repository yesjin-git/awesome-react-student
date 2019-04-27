import React, { Component } from 'react';
import Axios from 'axios';
import ContentList from '../component/contentList/ContentList';
import 'tachyons';

export default class Travel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  

  componentDidMount() {
    this.fetchTravel();

  }

  setContents = (data) => { 
    let list = []
     
     data.items.forEach((item, index) => {
         list.push({id:item.id.videoId, name:item.snippet.title})
     })
     return list;
   }

  // async await으로 변환 해보기
  fetchTravel = () => {
    const maxResults = 30;
    const token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY';


    Axios
      .get(`${'https://www.googleapis.com/youtube/v3/search?q=' +
      'travel' +
      '&part=snippet&key='}${
        token
      }&maxResults=${
        maxResults}`)
      .then(({ data }) => {
        const list = this.setContents(data);

        this.setState({ contents: list });
      });

  }


  render() {

    const { contents } = this.state;

    return (
      <div className="mt-3">
        <ContentList contents={contents} />
      </div>
    );
  }
}
