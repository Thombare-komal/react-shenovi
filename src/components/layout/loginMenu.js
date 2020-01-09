import React, { Component } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import SignupModal from "./signupModal";

class LoginMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: props.openLogin,
      openSignup : false,
      email_id: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState(prevState => ({
      openLogin: props.openLogin
    }));
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("txtrequired", value => {
      if (value.length > 0) {
        return true;
      }
      return false;
    });
  }
  openSignup(){
    this.setState(prevState => ({
      openLogin: false,
      openSignup: true
    }));
    console.log(this.state)
  }
  handleChange(event) {
    this.setState(prevState => ({
      email_id: event.target.value,
      password: event.target.value
    }));
  }
  handleClose() {
    this.setState(prevState => ({
      openLogin: false
    }));
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className=" col-md-6"></div>
          <div className=" col-md-6">
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
            >
              <Menu
                id="simple-menu"
                keepMounted
                open={this.state.openLogin}
                PaperProps={{
                  style: {
                    width: "400px"
                  }
                }}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  <TextValidator
                    label="First Name"
                    type="text"
                    className="login-name"
                    onChange={this.handleChange}
                    name="first_name"
                    value={this.state.first_name}
                    validators={["txtrequired"]}
                    errorMessages={["this field is required"]}
                    fullWidth
                  />
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <TextValidator
                    label="First Name"
                    type="text"
                    className="login-name"
                    onChange={this.handleChange}
                    name="first_name"
                    value={this.state.first_name}
                    validators={["txtrequired"]}
                    errorMessages={["this field is required"]}
                    fullWidth
                  />
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <div className="login-actions">
                    <Button
                      variant="contained"
                      color="primary"
                      className="login-button"
                      fullWidth
                      disabled
                    >
                      Login
                    </Button>
                    <div className="forgot-password">
                      <a href="">Forgot Password?</a>
                    </div>
                    <div className="forgot-password">
                      New to Shenovi? <a onClick={() => this.openSignup()}>Sign Up?</a>
                    </div>
                    <SignupModal
                      openModal={this.state.openSignup}
                    />
                  </div>
                </MenuItem>
              </Menu>
            </ValidatorForm>
          </div>
        </div>
      </div>
    );
  }
}
export default LoginMenu;
