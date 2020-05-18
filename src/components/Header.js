import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/">
            YelpCamp
          </a>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a href="/"> Login</a>
            </li>
            <li>
              <a href="/"> Sign Up</a>
            </li>
            <li>
              <a href="/"> Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
