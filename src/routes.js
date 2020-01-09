import React, { Component } from "react";
import AdminLayout from "./AdminLayout";
import PublicForum from "./components/publicforum";
import RegisteredCommunity from "./users/registeredCommunity";
import HomeComponent from "./components/Home/HomeComponent";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Home",
    icon:"glyphicon glyphicon-home" ,
    component: HomeComponent,
    layout: "/dashboard",
  },
  {
    path: "/public-forum",
    name: "Public Forum",
    icon: "glyphicon glyphicon-user",
    component: PublicForum,
    layout: "/public-forum",
  },
  {
    name: "Community",
    icon: "glyphicon glyphicon-user",
    layout:"/registered-community",
    items: [
      {
        name: 'Registered Community',
        path: "/registered-community",
        component: RegisteredCommunity,
      }
    ],
    
  }
];


export default dashboardRoutes;
