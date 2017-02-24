var React = require('react');

var FoodCollection = require('../models/models').FoodCollection;
var OrderCollection = require('../models/models').OrderCollection;

var MenuContainer = React.createClass({

  getInitialState: function(){
    var foodCollection = new FoodCollection();
    var orderCollection = new OrderCollection();
    return {
      foodCollection: foodCollection,
      orderCollection: orderCollection
    };
  },
  componentWillMount: function(){
    var newFoodCollection = this.state.foodCollection;
    newFoodCollection.add([
      {food_item: 'Panaeng', description: 'Pork, Chicken or Beef.', price: 8.59},
      {food_item: 'Por Pia Tord', description: 'Fried spring roll.', price: 2.25},
      {food_item: 'Som Tam', description: 'Spicy Papaya Salad', price: 9.95},
      {food_item: 'Tom Yam Kai', description: 'Spicy Chicken Soup', price: 3.75}
    ]);
    this.setState({foodCollection: newFoodCollection});
  },
  addOrderItem: function(foodProps){
    this.state.orderCollection.add(foodProps.toJSON());
    this.forceUpdate();
  },

render: function(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="restaurant-name"> Majestic Thai </h1>
            <div className="col-md-8 menu-window">
              <FoodForm addOrderItem={this.addOrderItem} foodCollection={this.state.foodCollection} />
            </div>
            <div className="col-md-4 order-window">
              <OrderForm orderCollection={this.state.orderCollection}/>
            </div>
        </div>
      </div>
    </div>
  );
}
});

var FoodForm = React.createClass({

  render: function(){
    var self = this;
    var foodListings = this.props.foodCollection.map(function(foodProps){
      return (
        <div key={foodProps.cid}>
          <span className="item-listing"> {foodProps.get('food_item')} </span>
            <ul className="item-price">
              <li> Price </li>
              <li>{foodProps.get('price')}</li>
            </ul>
            <button type="button" className="btn btn-default btn-xs" onClick={() => {self.props.addOrderItem(foodProps)}}>Add To Order</button>
          <p className="item-description"> {foodProps.get('description')}</p>
          <br></br>
        </div>
      );
    });

    return (
      <div>
        {foodListings}
      </div>
    );
  }
});


var OrderForm = React.createClass({

  placeOrder: function(){

    var subTotal = this.props.orderCollection.subTotal();

    var items = this.props.orderCollection.map(function(item){
      var title = item.get('food_item');
      var price = item.get('price');

      return {
        title,
        price
      }
    });

    this.props.orderCollection.create({username:'Sean', subTotal: subTotal, items: items})
    this.props.orderCollection.reset();
    this.forceUpdate();



    // this.props.orderCollection
  },

  render: function(){
    // var self = this;
    // this.props.orderCollection.fetch().done(function(){
    //   console.log(self.props.orderCollection);
    // });

    var subTotal = this.props.orderCollection.subTotal();

    var orderItems = this.props.orderCollection.map(function(orderItem){

      return (
        <li key={orderItem.cid}>
          <span>{orderItem.get('food_item')}</span>
          <span className="order-item-price"> {orderItem.get('price')} </span>
        </li>
      )
    });

    return(
      <div>
        <span> Your Order </span>
          <ul>
            {orderItems}
          </ul>
          <p> Subtotal: ${subTotal} </p>
        <button onClick={this.placeOrder} type="submit" id="place-order-btn" className="btn btn-secondary btn-sm">Place Order</button>
      </div>
    );
  }
});


module.exports = {
  MenuContainer
};
