import React from "react";

const CampgroundDetail = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <p class="lead">Yelp Camp</p>
          <div class="list-group">
            <li class="list-group-item active">Info 1</li>
            <li class="list-group-item">Info 1</li>
            <li class="list-group-item">Info 1</li>
          </div>
        </div>
        <div class="col-md-9">
          <div class="thumbnail">
            <img class="img-responsive" src="" />
            <div class="caption-full">
              <h4 class="pull-right">$9.00 night</h4>
              <h4>
                <a>campground.name</a>
              </h4>
              <p>campground.description </p>
              <p>
                <em>Submitted by campground.author.username</em>
              </p>
              {/* if(currentUser && campground.author.id.equals(currentUser._id)){ 
            <a class="btn btn-xs btn-warning" href="/campgrounds/<%=campground._id%>/edit">Edit</a>
            <form action="/campgrounds/<%=campground._id%>?_method=DELETE" method="POST">
              <button class="btn btn-xs btn-danger">Delete</button>
            </form>
         */}
            </div>
          </div>
          <div class="well">
            <div class="text-right">
              <a
                class="btn btn-success"
                href="/campgrounds/<%= campground._id%>/comments/new"
              >
                Add New Comment
              </a>
            </div>
            <hr />
            {/*}campground.comments.forEach(function(comment){
				<div class="row">
					<div class='col-md-12'>
						<strong><%= comment.author.username %></strong>
						<span class="pull-right"> 10 days ago</span>
						<p>
							 <%= comment.text %>
						</p>
					</div>
			  </div>
 				 }) */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampgroundDetail;