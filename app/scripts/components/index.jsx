var React = require('react');

var FoodCollection = require('../models/models').FoodCollection;


var MenuContainer = React.createClass({

  getInitialState: function(){
    var foodCollection = new FoodCollection();
    console.log('we have liftoff!', foodCollection);
    return {
      foodCollection: foodCollection,
      // console.log('hi');  Why is this an unexpected token?
    };
  },
  componentWillMount: function(){
    console.log('testing the collection', this.state.foodCollection);
    var newFoodCollection = this.state.foodCollection;
    console.log('collection still same', newFoodCollection);
      newFoodCollection.add([
        {food_item: 'Panaeng', description: 'Pork, Chicken or Beef.', price: 8.50},
        {food_item: 'Por Pia Tord', description: 'Fried spring roll.', price: 2.25 + ' ea'},
        {food_item: 'Som Tam', description: 'Spicy Papaya Salad', price: 9.95},
        {food_item: 'Tom Yam Kai', description: 'Spicy Chicken Soup', price: 3.75}
      ]);
      console.log('Houston - We have no problem, yet..', newFoodCollection);
      console.log(this.state);
      this.setState({foodCollection: newFoodCollection})
      console.log(newFoodCollection);
  },

render: function(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="restaurant-name"> Majestic Thai </h1>

            <div className="col-md-8 menu-window">

              <FoodForm />

            </div>

            <div className="col-md-4 order-window">

              <OrderForm />

            </div>

        </div>
      </div>
    </div>
  );
}
});




var FoodForm = React.createClass({
render: function(){
  return (
    <div>
      <span className="item-listing"> Food Item </span>
        <ul className="item-price">
          <li>Price</li>
          <li>${1.12}</li>
        </ul>
      <p className="item-description"> This is a tasty menu item description. </p>
    </div>
  );
}
});




var OrderForm = React.createClass({
  render: function(){
    return(
      <div>
        <span> Your Order </span>
          <ul>
            <li> Populated Order Items
              <span className="order-item-price"> $ </span>
            </li>
          </ul>
          <p> Subtotal: ${1.25} </p>
        <button type="submit" className="btn btn-secondary btn-sm">Place Order</button>
      </div>
    );
  }
});

module.exports = {
  MenuContainer
};
