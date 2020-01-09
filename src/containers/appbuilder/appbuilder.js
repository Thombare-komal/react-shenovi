import React, { Component } from "react";
import LayoutHoc from "../../hoc/LayoutHoc";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";

class AppBuilder extends Component {
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            path={prop.layout}
            render={props => (
              <prop.component {...props} componentName={prop.name} />
            )}
            key={key}
          />
        );
      } 
      else if (prop.layout === "/public-forum") {
        return (
          <Route
            path={prop.layout}
            render={props => (
              <prop.component {...props} componentName={prop.name} />
            )}
            key={key}
          />
        );
      } else if (prop.layout === "/users") {
        const Component1 = prop.items[0].component;
        console.log(prop.layout+prop.items[0].path)
        return (
          <Route
            path={prop.layout+prop.items[0].path}
            render={props => (
              <Component1 {...props} componentName={prop.items[0].name}  />
            )}
            key={key}
          />
        );
      }
      else if (prop.layout === "/registered-community") {
        const Component1 = prop.items[0].component;
        console.log(prop.layout)
        return (
          <Route
            path={prop.layout}
            render={props => (
              <Component1 {...props} componentName={prop.items[0].name}  />
            )}
            key={key}
          />
        );
      }
      //  {
      //   return null;
      // }
    });
  }
  render() {
    console.log(this.getRoutes(routes))
    return (
      <LayoutHoc>
        <Switch>{this.getRoutes(routes)}</Switch>
      </LayoutHoc>
    );
  }
}

export default AppBuilder;
