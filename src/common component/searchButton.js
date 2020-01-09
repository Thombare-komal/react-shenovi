import React, { Component } from "react";
import { Input } from "semantic-ui-react";
class SearchButton extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonClick: false
    };
  }
  showSearchBar() {
    this.setState({
      buttonClick: !this.state.buttonClick
    });
  }
  render() {
    return (
      <div>
        {this.state.buttonClick && (
          <div className="row">
            <div className="col col-md-12">
            <input/>
              <div className="row">
                <div className="col-md-11"></div>
                <div className="col-md-1">
                  <IconButton
                    className="close-icon"
                    aria-label="close"
                    onClick={() => this.handleClose()}
                  >
                    <CloseIcon />
                  </IconButton>
              </div>
            </div>
          </div>
        </div>
        )}
        <button
          className="ui search-button icon button"
          onClick={() => this.showSearchBar()}
        >
          <i className="big search icon"></i>
        </button>
        
      </div>
    );
  }
}
export default SearchButton;
