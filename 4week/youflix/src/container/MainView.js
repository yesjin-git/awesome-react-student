import React, { Component } from 'react';
import axios from 'axios';
import FullContent from '../component/fullContent/FullContent';
import ContentList from '../component/contentList/ContentList';

class MainView extends Component {

  state = {
    fullContent: {},
    contents : []
  }

  componentDidMount(){
    this.fetchYoutube();
  }

  setContents = (data) => {
    const list= [];
    data.forEach(item => {
      list.push({
        id: item.id,
        name: item.snippet.title
      });
    });
    return list;
  }

  handleFullContentChange = (content) => {
    this.setState({
      fullContent: content
    });
  }

  fetchYoutube = () => {
    axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyCnS6YAEmYkHJGS7PwlY4lJzxsimBLltDA&maxResults=21')
      .then(
        ({data}) => {
          const list = this.setContents(data.items);
          this.setState({
            contents: list.slice(1, list.length),
            fullContent: list[0]
          });
        }
      );
  }


  render() {
    const { fullContent, contents} = this.state;
    const { handleFullContentChange } = this;
    return (
      <div>
        <FullContent content={fullContent}/>
        <ContentList contents={contents} onClick={handleFullContentChange}/>
      </div>
    );
  }
}

export default MainView;