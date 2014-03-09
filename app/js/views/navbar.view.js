define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var navbarTemplate = require('hbs!app.templates/navbar.view');

  var NavbarView = Backbone.View.extend({
    template: navbarTemplate,

    render: function() {
      this.setElement(this.template());
      return this;
    }
  });
  return NavbarView;
});