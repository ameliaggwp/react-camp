import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";
import CampgroundDetail from "./CampgroundDetail";
import List from "./List";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Landing />
    </React.Fragment>
  );
};

export default App;
