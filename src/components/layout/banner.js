import React,{Component} from "react";
import banner from "../../assets/shenovi-banner.jpg";
import { Button } from "semantic-ui-react";
import LayoutHoc from "../../hoc/LayoutHoc";
import SignupModal from "./signupModal";

class Banner extends React.Component {
  constructor(props){
    super(props);
    this.state={
      openSignup:false
    }
  }
  async onSignupClick(){
    await  this.setState(prevState => ({
      openSignup: true
       
     }));
  }
  render(){
    
    return(
      <LayoutHoc>
        <img className="banner-img" alt="banner" src={banner} />
        <div className="centered-text">
          <h2>Locals Supporting Migrants</h2>
          <p>
            {" "}
            Shenovi is an open community supporting migrants <br />
            Our mission is to <br /> connect migrants with locals and experts to
            help you find answers and access services to explore, study, work, and
            navigate life in Australia.{" "}
          </p>
          <Button
            as="button"
            circular="true"
            className="ui header-signup-button button"
            onClick={()=>this.onSignupClick()}
          >
            Sign Up
          </Button>
          <SignupModal openModal={this.state.openSignup} closeModal={!(this.state.openSignup)}/>
        </div>
      {/* <main>{props.children}</main> */}
    </LayoutHoc>
    )
  }
}
export default Banner;
