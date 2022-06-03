import React, { Component } from "react";

import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/Menucomponent";
import "./App.css";
import { DISHES } from "./share/dishes";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Learning React </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;
