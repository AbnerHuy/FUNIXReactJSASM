import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menucomponent";
import { DISHES } from "../share/dishes";
import DishDetail from "./DishdetailComponet";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        selectedDish:null
    };
    }
    OndishSelec(dishId) {
        this.setState({selectedDish:dishId})
    }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Learning React </NavbarBrand>
          </div>
        </Navbar>
            <Menu dishes={this.state.dishes} onClick={(dishId => selectedDish(dishId))} />
            <DishDetail dish={ this.state.dishes.filter(dish =>dish.id===this .state.selectedDish)[0]}/>
      </div>
    );
  }
}
export default App;
