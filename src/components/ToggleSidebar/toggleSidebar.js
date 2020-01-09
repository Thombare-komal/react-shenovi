import React, { Component } from "react";
import ToggleSidebarMenuItem from "./toggleSidebarMenuItem";
import { Button } from "semantic-ui-react";
import List from "@material-ui/core/List";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import LoginMenu from "../layout/loginMenu";

class ToggleSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showToggleNavbar() {
    this.setState({ visible: !this.state.visible });
  }
  async handleClickAway() {
    await this.setState({ visible: false });
  }
  render() {
    return (
      <div>
        <button
          className="ui toggle-button icon button"
          onClick={() => this.showToggleNavbar()}
        >
          <i className="large align justify icon"></i>
        </button>

        {this.state.visible && (
          <ClickAwayListener onClickAway={() => this.handleClickAway()}>
            <div className="show-toggle-navbar">
             <Button
              as="button"
              circular="true"
              className="fluid ui ask-question-button button"
              onClick={() => this.onLoginClick()}
            >
              <i className="pencil icon"></i>
              Ask a Question?
            </Button>
            <List  component="nav" disablePadding>
              {this.props.routes.map((item, key) => {
                return <ToggleSidebarMenuItem {...item} key={key} />;
              })}
            </List>
            </div>
          </ClickAwayListener>
        )}
      </div>
    );
  }
}
export default ToggleSidebar;
