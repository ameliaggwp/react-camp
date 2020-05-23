import React from "react";
import { Link } from "react-router-dom";
import Campgrounds from "./Campgrounds";

const Landing = () => {
  return (
    <div className="container">
      <header className="jumbotron">
        <div className="container">
          <h1> Welcome to YelpCamp!</h1>
          <p>View our hand-picked campgrounds from all over the world </p>
          <p>
            <a className="btn btn-primary btn-lg" href="/campgrounds/new">
              Add New Campground
            </a>
          </p>
        </div>
      </header>
      <div className="row text-center">
        {Campgrounds.map((campground) => (
          <div className="col-md-3 col-sm-6">
            <div className="thumbnail">
              <img src={campground.image} />
              <div className="caption">
                <h4>{campground.name}</h4>
              </div>
              <p>
                <Link
                  to={{
                    pathname: `/campgrounds/:${campground.id}`,
                    state: { campground: campground },
                  }}
                >
                  More Info
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
