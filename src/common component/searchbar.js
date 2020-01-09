import React, { Component } from "react";
import { Input } from "semantic-ui-react";

class Searchbar extends React.Component {
  constructor() {
    super();
    this.state = {
      bigSearch: false
    };
  }
  showBigSearch() {
    this.setState({
      bigSearch: true
    });
  }
  render() {
    const smallSearch = (
      <Input
        size="big"
        icon="search"
        validators={["required"]}
        className="smallInput"
        iconPosition="left"
        active="true"
        focus="true"
        onClick={() => this.showBigSearch()}
        placeholder="Search..."
      />
    );
    const bigSearch = (
      <Input
        size="big"
        validators={["required"]}
        icon="search"
        className="bigInput"
        placeholder="Search..."
      />
    );
    return (
      <>
        {this.state.bigSearch ? bigSearch : smallSearch}
        
      </>
    );
  }
}
export default Searchbar;
