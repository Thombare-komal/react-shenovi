import AdminLayout from "./AdminLayout";
import PublicForum from "./components/publicforum";
import RegisteredCommunity from "./users/registeredCommunity"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Home",
    icon:"glyphicon glyphicon-home" ,
    component: AdminLayout,
    layout: "/dashboard",
    children:false
  },
  {
    path: "/public-forum",
    name: "Public Forum",
    icon: "glyphicon glyphicon-user",
    component: PublicForum,
    layout: "/public-forum",
    children:false
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
