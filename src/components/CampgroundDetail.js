import React from "react";

class CampgroundDetail extends React.Component {
  state = {
    campground: null,
  };

  componentDidMount() {
    this.setState({ campground: this.props.campground });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p className="lead">Yelp Camp</p>
            <div className="list-group">
              <li className="list-group-item active">Info 1</li>
              <li className="list-group-item">Info 1</li>
              <li className="list-group-item">Info 1</li>
            </div>
          </div>
          <div className="col-md-9">
            <div className="thumbnail">
              <img className="img-responsive" src="" />
              <div className="caption-full">
                <h4 className="pull-right">$9.00 night</h4>
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
            <div className="well">
              <div className="text-right">
                <a
                  className="btn btn-success"
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
  }
}

export default CampgroundDetail;
