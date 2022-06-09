import React from "react";
import { Card, CardImg, CardText ,CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'


function StaffList(props) {
   
    const list = props.staffs.map((staff) => {

        return (
            
            <div key={staff.id} className=" col-sm-6 col-md-3 col-lg-2 p-1 ">
                <Link to={`staff/${staff.id}`}>
                    <div >
                <img  src={staff.image} alt={staff.name} />
                <p>{staff.name}</p>
            </div>
                 </Link>

            </div>





        )
    })

    return (

        <div>
            <div className="container">
                <h1>Nhân Viên</h1>
                <div className="row ">
                   
                    {list}
                   
                </div>
            </div>
        </div>

    )
}

export default StaffList