import React from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap"





function RenderDepartment(props) {
    return (
        <Card>
            <CardTitle className="m-2">{props.department.name }</CardTitle>
            <CardBody>
                <CardText>
                     Số lượng nhân viên:{props.department.numberOfStaff}
                </CardText>
            </CardBody>
        </Card>
    )
}


function Department(props) {
    
    const departmenList = props.department.map(item => {
        return (
            <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2 " key={item.id}>
                <RenderDepartment department={ item}/>
            </div>
        )
    })
    return (
        <div className="container ">
            <h1> Phòng Ban</h1>
            
            <div className=" row shadow m-3  ">{departmenList }</div>
        </div>
    )
}
 export default Department