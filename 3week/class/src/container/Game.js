import React, { Component } from 'react';
import ContentList from "../component/contentList/ContentList";
import Youtube from "../request/Youtube";

export default class Game extends Component {
  state = {
    contents: [],
    keyword: null,
  };

  async componentWillMount() {
    let oYoutube = new Youtube();
    let videoList = await oYoutube.getVideoList('game');

    this.setState({ contents: oYoutube.conversionData(videoList) });
  }

  render() {
    return <div>
      <ContentList contents={ this.state.contents } />
    </div>;
  }
};