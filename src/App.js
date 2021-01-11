import React, { Component } from "react";
import _ from "lodash";
import "./App.css";
import YouTubeSearch from "youtube-api-search";
import SearchBar from "./Components/searchBar";
import VideoList from "./Components/videoList";
import VideoDetail from "./Components/videoDetails";

const API_KEY = "AIzaSyBg0VLpPL65ZTSNAyA8ShLf1Q3ASmw0MWY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch("peoplesareawesome");
  }

  videoSearch(term) {
    YouTubeSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="container">
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList
              onVideoSelect={(selectedVideo) =>
                this.setState({ selectedVideo })
              }
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
