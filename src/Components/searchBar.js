import React, { Component } from "react";
import "../style/style.css";
import YoutubeLogo from "../image/youtubeLogo.png";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <img alt="logo" src={YoutubeLogo} />
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
          placeholder="search"
        />
      </div>
    );
  }
}

export default SearchBar;
