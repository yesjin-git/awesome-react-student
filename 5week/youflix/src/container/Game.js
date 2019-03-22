import React, { Component} from "react"
import ContentList from "../component/contentList/ContentList.js";
import axios from "axios";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
          contents : [],
        };
    }
    componentWillMount(){
      this.fetchGame();
    }

    setContents = (data) => {
     let list = []
      data.items.forEach((item, index) => {
        if(item.id.videoId) {
          list.push({id:item.id.videoId, name:item.snippet.title})
        }
      })
      return list
  }

    fetchGame = () => {
      let game = 'Game'
      let maxResults = 30
      let token = 'AIzaSyC-v1sIG2Wn3YnoD_7_bBS4zPDceDLKmLY'//본인의 토큰을 발급 받아서 입력
      axios.get('https://www.googleapis.com/youtube/v3/search?q='+ game +'&part=snippet&key='+token+'&maxResults='+maxResults)
      .then(({data}) => {
        const list = this.setContents(data)
        this.setState({contents:list})
      })
    }

    render() {
        return (
          <div className="Game">
            <ContentList contents={this.state.contents} />
          
          </div>
        );
      }
 }

 export default Game;