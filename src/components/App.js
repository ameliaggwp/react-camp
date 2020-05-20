import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";
import CampgroundDetail from "./CampgroundDetail";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/campgrounds/:id" component={CampgroundDetail} />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
