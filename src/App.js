import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";

import routes from "./routes";
import withTracker from "./withTracker";

import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import SpacingGrid from "../src/revampDashboard";
import AppBarDashboard from "../src/appbar";


export default () => (
  <div>
    <AppBarDashboard></AppBarDashboard>
     <SpacingGrid></SpacingGrid>
  </div>
 
);
