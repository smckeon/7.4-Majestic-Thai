var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

require('./router.js');

// Attempt to render the XML without a router.

// var MenuContainer = require('./components/index.jsx').MenuContainer;

// function Render(){
//   ReactDOM.render(
//     React.createElement(MenuContainer),
//     document.getElementById('app'));
// };

$(function(){
  Backbone.history.start();
});
