import React,{Component} from 'react'
import { Nav, Navbar, NavbarBrand, NavItem, Collapse, NavbarToggler } from 'reactstrap'
import {NavLink} from "react-router-dom"

class Header extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen:!this.state.isNavOpen
        })
    }
    render() {
        
    
        return (
            <div>
                <Navbar dark expand="md" color="primary">
                    <div className="container">
                        <NavbarToggler onClick={ this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/"><img src="assets/images/logo.png " alt="Logo" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/staff">
                                        <span className='fa fa-users fa-lg'></span>Nhân Viên
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/department">
                                        <span className='fa fa-id-card-o fa-lg'></span>Phòng Ban
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/salary">
                                        <span className='fa fa-money fa-lg'></span>Bảng Lương
                                    </NavLink>
                                </NavItem>
                            
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header