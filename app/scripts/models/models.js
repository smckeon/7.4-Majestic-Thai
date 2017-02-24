var Backbone = require('backbone');

var Food = Backbone.Model.extend({
  idAttribute: '_id',
});

var FoodCollection = Backbone.Collection.extend({
  model: Food,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/restaurant'
});

module.exports = {
  Food,
  FoodCollection
};
