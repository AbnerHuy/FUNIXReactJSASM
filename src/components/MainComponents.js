import React, { useState } from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import StaffList from "./StaffList"
import Department from "./DepartmentComponent";
import Detail from "./DetailComponents";
import SalaryDetail from "./SalaryComponent";
import{Switch,Route,Redirect} from "react-router-dom"
import{STAFFS,DEPARTMENTS}from "../shared/Staffs"


function Main() {
    const [state, setState] = useState({
        staffs: STAFFS,
        departmens:DEPARTMENTS
    })

    const DetailStaff = ({ match }) => {
        return (
            <Detail ID={ state.staffs.filter((item)=>item.id===parseInt(match.params.staffId,10))[0]}/>
        )

    }

    return (
        <div>
            <Header />
            <Switch>
                <Route  exact path='/staff' component={() => <StaffList staffs={state.staffs} />} />
                <Route  path='/staff/:staffId' component ={DetailStaff}/>
                <Route  path='/department' component ={()=><Department department={state.departmens}/>}/>
                <Route path='/salary' component={() => <SalaryDetail salary={state.staffs} />} />
                <Redirect to="/staff"/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default Main