import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";
import ToggleSidebarMenuItemComponent from "./toggleSidebarMenuItemComponent";

class ToggleSidebarMenuItem extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        open : false
      }
  }
 handleClick() {
  this.setState(prevState => ({
    open: !prevState.open
  }));
  }
  render() {
    const route = this.props.route;
    const useStyles = makeStyles(theme =>
      createStyles({
        menuItem: {
          "&.active": {
            background: "rgba(0, 0, 0, 0.08)",
            "& .MuiListItemIcon-root": {
              color: "#fff"
            }
          }
        },
        menuItemIcon: {
          color: "#97c05c"
        }
      })
    );
    const { name, path, Icon, items = [] } = this.props;
    const isExpandable = items && items.length > 0;
    const MenuItemRoot = (
      <ToggleSidebarMenuItemComponent  link={path} onClick={()=>this.handleClick()}>
        {!!Icon && (
          <ListItemIcon >
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
        {isExpandable && !(this.state.open) && <IconExpandMore />}
        {isExpandable && (this.state.open) && <IconExpandLess />}
      </ToggleSidebarMenuItemComponent>
    )
  
    const MenuItemChildren = isExpandable ? (
      <Collapse in={this.state.open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <ToggleSidebarMenuItem {...item} key={index} />
          ))}
        </List>
      </Collapse>
    ) : null

    return (
      <>
     
      {MenuItemRoot}
      {MenuItemChildren}
    </>
    );
  }
}

export default ToggleSidebarMenuItem;
