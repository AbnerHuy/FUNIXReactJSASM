import React, { Component } from "react";
import Home from "./HomeComponent";
import { DISHES } from "../share/dishes";
import DishDetail from "./DishdetailComponet";
import Menu from "./Menucomponent";
import Header from "./HeaderComponents";
import Footer from "./FooterComponent";
import { Switch, Router, Redirect } from 'react-router-dom'
import Contact from "./ContactComponent";
import {COMMENTS}from"../share/comments"
import {Leaders}from"../share/comments"
import {PROMOTIONS}from"../share/comments"

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        leaders: Leaders,
        promotions:PROMOTIONS
    };
    }
  

  render() {

    const HomePage = () => {
      return(

        <Home
        
          dish={this.state.dishes.filter((dish) => dish.feature[0])}
          promotion={this.state.promotions.filter((promo)=>promo.feature[0])}
          leader={this.state.leaders.filter((leader)=>leader.feature[0])}
        
        />

      )
    }

    return (
      <div>
        <Header />
        
        <Switch>
          <Router path="/home" component={HomePage} />    
          <Router exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Router exact path="/contacus" component={Contact}/>
          <Redirect to="/home"/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}
export default Main;
