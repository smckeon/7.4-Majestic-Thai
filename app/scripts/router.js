var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var MenuContainer = require('./components/index.jsx').MenuContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(MenuContainer),
      document.getElementById('app')
    )
  },
});

var appRouter = new AppRouter();

module.exports = {
  appRouter
}
