/* global define */

define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var AddBlogView = require('views/add.blog.view');
  var BlogView = require('views/blog.view');
  var HomeView = require('views/home.view');
  var NavView = require('views/navbar.view');

  var Router = Backbone.Router.extend({
    routes: {
      "": "home",
      "blog": "blog",
      "addBlog": "addBlog"
    },

    addBlog: function() {
      var addBlogView = new AddBlogView();
      this.swapView(addBlogView);
    },

    blog: function() {
      var blogView = new BlogView();
      this.swapView(blogView);
    },

    destroyView: function(view) {
      if(view !== undefined) {
        view.undelegateEvents();
        view.$el.removeData().unbind();
        view.remove();
        Backbone.View.prototype.remove.call(view);
      }
    },

    home: function() {
      var navView = new NavView();
      $('#nav').html(navView.render().el);
      var homeView = new HomeView();
      $('#app').html(homeView.render().el);
    },

    init: function() {

    },

    swapView: function(view) {
      this.destroyView(this.currentView);
      $('#app').html(view.render().el);
      this.currentView = view;
    }
  });

  return Router;
});