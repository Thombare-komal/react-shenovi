/* eslint-disable */
import React, { forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink, NavLinkProps } from "react-router-dom";


class SidebarMenuItemComponent extends React.Component {
  render() {
    const { className, onClick, link, children } = this.props;
    return (
      !link || typeof link !== "string" ? (
      <ListItem
        button
        className={className}
        children={children}
        onClick={onClick}
      />
    ) : (
      <ListItem
        button
        className={className}
        children={children}
        component={forwardRef((NavLinkProps, ref) => <NavLink exact {...NavLinkProps} innerRef={ref} />)}
        to={link}
      />
    )
    );
  }
}

export default SidebarMenuItemComponent;
