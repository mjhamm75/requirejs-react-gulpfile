define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  var bookTemplate = require('hbs!app.templates/books.view');

  var BooksView = Backbone.View.extend({
    template: bookTemplate,

    render: function() {
      this.setElement(this.template());
      return this;
    }
  });

  return BooksView;
});