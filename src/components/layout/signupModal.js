import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import DialogContent from "@material-ui/core/DialogContent";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { Checkbox } from "@material-ui/core";
import CityPlaces from "./cityPlaces";

class SignupModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSignup: props.openModal,
      openLogin: false,
      first_name: "",
      last_name: "",
      user_name: "",
      email_id: "",
      password: "",
      city: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillReceiveProps(props) {
    this.setState({ openSignup: props.openModal });
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("txtrequired", value => {
      if (value.length > 0) {
        return true;
      }
      return false;
    });
  }
  //  async onLoginClick() {
  //     console.log(this.state)
  //    await this.setState(prevState => ({
  //       openSignup : !(prevState.openSignup),
  //       openLogin: !(prevState.openLogin)
  //     }));
  //     console.log(this.state)
  //   }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => ({
      [name]: value
    }));
    console.log(value.length);
  }
   handleClose() {
    console.log(this.state)
     this.setState(prevState => ({
      openSignup: false
    }));
    console.log(this.state)
  }
  componentDidMount() {
    ValidatorForm.addValidationRule("isTruthy", value => value);
  }
  render() {
    const signupStyle = {
      // maxWidth: '500px',
      // height:'262px',
      // position: 'relative',
      // top: '10px',
      // right: '22px',
      //  zIndex: 10040,
      //  overflow: 'auto',
      //  overflowY: 'auto'
    };

    return (
      <div>
        <Dialog
          open={this.state.openSignup}
          disableEscapeKeyDown={false}
          aria-labelledby="form-dialog-title"
          style={signupStyle}
          disableBackdropClick
        >
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
          <DialogContent>
            <ValidatorForm
              ref="form"
              onSubmit={this.handleSubmit}
              onError={errors => console.log(errors)}
            >
              <div className="signup-firstname-lastname">
                <TextValidator
                  label="First Name"
                  type="text"
                  size="medium"
                  className="signup-name"
                  onChange={this.handleChange}
                  name="first_name"
                  value={this.state.first_name}
                  validators={["txtrequired"]}
                  errorMessages={["this field is required"]}
                />
                <TextValidator
                  label="Last Name"
                  type="text"
                  size="medium"
                  className="signup-name"
                  onChange={this.handleChange}
                  name="last_name"
                  value={this.state.last_name}
                  validators={["txtrequired"]}
                  errorMessages={["this field is required"]}
                />
              </div>
              <TextValidator
                label="User Name"
                type="text"
                onChange={this.handleChange}
                name="user_name"
                value={this.state.user_name}
                validators={["txtrequired"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <TextValidator
                label="Email ID"
                type="email"
                onChange={this.handleChange}
                name="email_id"
                value={this.state.email_id}
                validators={["txtrequired", "isEmail"]}
                errorMessages={["this field is required", "email is not valid"]}
                fullWidth
              />
              <TextValidator
                label="Password"
                type="password"
                onChange={this.handleChange}
                name="password"
                value={this.state.password}
                validators={["txtrequired"]}
                errorMessages={["this field is required"]}
                fullWidth
              />
              <CityPlaces />
              <div className="signup-checkbox">
                <Checkbox
                  type="checkbox"
                  validators={["isTruthy"]}
                  errorMessages={["this field is required"]}
                  // checked={value}
                  // value={value}
                />
                <div className="signup-checkbox-text">
                  I agree to the <a href="_blank">Privacy Policy</a>
                </div>
              </div>
              <div className="signup-checkbox">
                <Checkbox
                  type="checkbox"
                  validators={["isTruthy"]}
                  errorMessages={["this field is required"]}
                  // checked={value}
                  // value={value}
                />
                <div className="signup-checkbox-text">
                  I agree to the <a href="_blank">Terms & Conditions</a>
                </div>
              </div>

              <Button
                variant="contained"
                color="primary"
                className="login-button"
                fullWidth
                disabled
              >
                Create Account
              </Button>
              {/* <div className="forgot-password">
               Already a Member? <a onClick={() => this.onLoginClick()}>Login</a>
              </div> */}
            </ValidatorForm>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
export default SignupModal;
