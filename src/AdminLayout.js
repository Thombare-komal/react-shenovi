import React, { Component } from "react";
import routes from "../src/routes";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Banner from "./components/layout/banner";
import AppBuilder from "./containers/appbuilder/appbuilder";
import Sidebar from "./components/sidebar/sidebar";

class AdminLayout extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-md-12"> */}
            <Header {...this.props} routes={routes} />
          {/* </div> */}
        </div>
        <div className="row">
            <Banner />
        </div>
        <div className="row">
          <div className="col-md-3">
            <Sidebar {...this.props} routes={routes} />
          </div>
          <div className="col-md-9">
            <AppBuilder {...this.props} />
          </div>
        </div>
        <div className="row">
          {/* <div className="col-md-12"> */}
            <Footer />
          {/* </div> */}
        </div>
      </div>
    );
  }
}
export default AdminLayout;
