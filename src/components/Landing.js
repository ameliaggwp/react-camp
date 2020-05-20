import React from "react";
import Campgrounds from "./Campgrounds";

const campgroundTile = () => {
  return (
    <div class="col-md-3 col-sm-6">
      <div class="thumbnail">
        <img src={this.props.image} />
        <div class="caption">
          <h4>{this.props.name}</h4>
        </div>
        <p>
          <a href="" class="btn btn-btn-primary">
            More Info
          </a>
        </p>
      </div>
    </div>
  );
};

const Landing = () => {
  return (
    <div class="container">
      <header class="jumbotron">
        <div class="container">
          <h1> Welcome to YelpCamp!</h1>
          <p>View our hand-picked campgrounds from all over the world </p>
          <p>
            <a class="btn btn-primary btn-lg" href="/campgrounds/new">
              Add New Campground
            </a>
          </p>
        </div>
      </header>
      <div class="row text-center">
        {Campgrounds.map((campground) => (
          <div class="col-md-3 col-sm-6">
            <div class="thumbnail">
              <img src={campground.image} />
              <div class="caption">
                <h4>{campground.name}</h4>
              </div>
              <p>
                <a href="" class="btn btn-btn-primary">
                  More Info
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
