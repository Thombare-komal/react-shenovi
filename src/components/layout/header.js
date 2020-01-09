import React, { Component } from "react";
import logo from "../../assets/shenovi_alt.png";
import LayoutHoc from "../../hoc/LayoutHoc";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Button } from "semantic-ui-react";
import Searchbar from "../../common component/searchbar";
import SignupModal from "./signupModal";
import LoginMenu from "./loginMenu";
import ToggleSidebar from "../../components/ToggleSidebar/toggleSidebar";
import { TextField } from "@material-ui/core";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignup: false,
      openLogin: false,
      buttonClick: false
    };
  }
  async onLoginClick() {
    await this.setState(prevState => ({
      openSignup: false,
      openLogin: true
    }));
  }
  async onSignupClick() {
    await this.setState(prevState => ({
      openSignup: true,
      openLogin: false
    }));
    console.log(this.state);
  }
  showSearchBar() {
    this.setState({
      buttonClick: !this.state.buttonClick
    });
  }
  clearSearchBar() {
   this.setState(prevState => ({
      buttonClick: !(prevState.buttonClick)
    }));
  }
  render() {
    return (
      <LayoutHoc>
        {this.state.buttonClick ? (
          <div className="container-fluid">
            <div className="row mobile-header">
              <div className="col-md-1 navbar-close-button-region">
              <button type="submit" className="navbar-close-button" onClick={() => this.clearSearchBar()}>
                  <i className="big close icon" alt="Search" />
                </button>
              </div>
              <div className="col-md-11">
              <TextField className="mobile-searchbar"/>
              </div>
            </div>
          </div>
        ) : (
          <div className="container-fluid">
            <div className="header">
              <div className="row">
                <div className="col col-md-8">
                  <div className="row">
                    <div className="col col-md-3">
                      <ToggleSidebar routes={this.props.routes} />
                    </div>
                    <div className="col col-md-3">
                      <img className="d-flex logo-img" alt="logo" src={logo} />
                    </div>
                    <div className="col col-md-6">
                      <Searchbar />
                      <button
                        className="ui search-button icon button"
                        onClick={() => this.showSearchBar()}
                      >
                        <i className="big search icon"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col col-md-4">
                  <div className="row">
                    <div className="col col-md-4">
                      <Button
                        as="button"
                        circular="true"
                        active="true"
                        className="ui header-login-button button"
                        onClick={() => this.onLoginClick()}
                      >
                        Login
                      </Button>
                      {this.state.openLogin ? (
                        <LoginMenu openLogin={this.state.openLogin} />
                      ) : null}
                    </div>
                    <div className="col col-md-4">
                      <Button
                        as="button"
                        circular="true"
                        className="ui header-signup-button button"
                        onClick={() => this.onSignupClick()}
                      >
                        Sign Up
                      </Button>
                      <SignupModal openModal={this.state.openSignup} />
                      <div className="col col-md-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </LayoutHoc>
    );
  }
}
export default Header;
