import React, {Component }from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse } from "reactstrap";
import {NavLink} from 'react-router-dom'


class Header extends Component{

    constructor(props) {
        super(props)

        this.state = {
            isNavOpen:false
        }
    }
        toggleNav(){
            this.setState = {
                isNavOpen:!this.state.isNavOpen
            }
            this.toggleNav=this.toggleNav.bind(this)
        }
    render() {
        return(
  
        <React.Fragment>
             <Navbar dark expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">\
                            <NavbarToggler onClick={this.toggleNav}/>
                            <img src="assets/images/logo.png" height="30" width="41" alt="Restauren"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="Nav-Link" to="/home"><span className=" fa fa-home fa-lg">Home</span></NavLink>
                            </NavItem>
                              <NavItem>
                                <NavLink className="Nav-Link" to="/aboutus"><span className=" fa fa-info fa-lg">About Us</span></NavLink>
                            </NavItem>
                              <NavItem>
                                <NavLink className="Nav-Link" to="/menu"><span className=" fa fa-list fa-lg">Menu</span></NavLink>
                            </NavItem>
                              <NavItem>
                                <NavLink className="Nav-Link" to="/contacus"><span className=" fa fa-address-card fa-lg"> COntact Us</span></NavLink>
                            </NavItem>
                            </Nav>
                            </Collapse>
                </div>
            </Navbar>

            <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Learning Reactjs</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur ut libero perspiciatis corrupti</p>
                                
                            </div>
                        </div>
                
                        
                </div>
            </Jumbotron>
            
        </React.Fragment>
        )
 }
    

}


export default Header