/** @jsx React.DOM */

define(function(require) {
  'use strict';

  var React = require('react');

  var NavDropdown = React.createClass({
    render: function() {
      return (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#blog">Blog</a></li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Other <b className="caret"></b></a>
          <ul className="dropdown-menu">
            <li><a href="#books">Books</a></li>
            <li><a href="#podcasts">Podcasts</a></li>
            <li><a href="#">Tech I Like</a></li>
            <li><a href="#">About me</a></li>
            <li><a href="#addBlog">Add a Blog</a></li>
          </ul>
        </li>
      </ul>
        );
    }
  });

  return NavDropdown;
});