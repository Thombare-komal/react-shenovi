import React, { Component } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { Button } from "semantic-ui-react";
import List from "@material-ui/core/List";
import LoginMenu from "../layout/loginMenu";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLogin: false
    };
  }
  async onLoginClick() {
    await this.setState(prevState => ({
      openLogin: true
    }));
  }
  render() {
    return (
      <div className="sidebar">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <Button
              as="button"
              circular="true"
              className="fluid ui ask-question-button button"
              onClick={() => this.onLoginClick()}
            >
              <i className="pencil icon"></i>
              Ask a Question?
            </Button>
            {this.state.openLogin ? (
              <LoginMenu openLogin={this.state.openLogin} />
            ) : null}
          </div>
          <div className="col-md-1"></div>
        </div>

        <List component="nav" disablePadding>
          {this.props.routes.map((item, key) => {
            return <SidebarMenuItem {...item} key={key} />;
          })}
        </List>
      </div>
    );
  }
}
export default Sidebar;
