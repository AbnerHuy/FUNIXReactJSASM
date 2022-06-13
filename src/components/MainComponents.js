import React, { Component, useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffListComponen"
import Department from "./DepartmentComponent";
import Detail from "./DetailComponents";
import SalaryDetail from "./SalaryComponent";
import{Switch,Route,Redirect} from "react-router-dom"
import{STAFFS,DEPARTMENTS}from "../shared/Staffs"


class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
             staffs: STAFFS,
            departmens:DEPARTMENTS
        }
        this.addStaff = this.addStaff.bind(this)
     
    }
    // Thêm nhân viên vào danh sách

     addStaff = (staff) => {
         const id = Math.floor(Math.random() * 10000 + 1);
         const newStaff = { id, ...staff };
         
    this.setState({
        staffs: [...this.state.staffs, newStaff],
   
    });
    
    
  };

    render() {
        // chuyển đổi String sang number
        const DetailStaff = ({ match }) => {
            return (
                <Detail ID={this.state.staffs.filter((item) => item.id === parseInt(match.params.staffId, 10))[0]} />
            )
        }
        // Di chuyển giữa các trang
        
         return (
        <div>
            <Header />
            <Switch>
                <Route  exact path='/staff' component={() => <StaffList add={this.addStaff} staffs={this.state.staffs} />} />
                <Route path='/staff/:staffId' component={DetailStaff} />
                <Route  path='/department' component ={()=><Department department={this.state.departmens}/>}/>
                <Route path='/salary' component={() => <SalaryDetail salary={this.state.staffs} />} />
                <Redirect to="/staff"/>
            </Switch>
            <Footer/>
        </div>
    )
    
    }
       
    }

   

   


export default Main