import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };
  onSearchSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui inverted segment search-bar--continuer">
        <form onSubmit={this.onSearchSubmit} className="ui inverted form">
          <div className="field">
            <label htmlFor="search-bar--input">Video Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              id="search-bar--input"
              className="input field"
              value={this.state.term}
            />
          </div>
          <input className="ui submit button" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
export default SearchBar;
