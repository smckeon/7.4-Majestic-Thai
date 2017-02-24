var Backbone = require('backbone');

var Food = Backbone.Model.extend({
  idAttribute: '_id',
});

var FoodCollection = Backbone.Collection.extend({
  model: Food,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/restaurant'
});

var OrderCollection = Backbone.Collection.extend({
  model: Food,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/restaurant-order',
  subTotal: function(){

    var subTotal = this.reduce(function(accum, i){
      return accum + i.get('price');
    },0);

    return subTotal.toFixed(2);
  }
});

module.exports = {
  Food,
  FoodCollection,
  OrderCollection
};
