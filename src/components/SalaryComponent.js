import React from "react";
import { Card, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from "reactstrap"
import{Link} from "react-router-dom"


const basicSalary = 300000;
const overTimeSalary = 200000 / 8;


function RenderSalary({Salary}) {
    return (
        <Card>
            <CardTitle>{Salary.name}</CardTitle>
            <CardBody>
                <CardText>Mã nhân viên :{ Salary.id}</CardText>
                <CardText>Hệ số lương :{ Salary.salaryScale}</CardText>
                <CardText>Số ngày làm thêm :{ Salary.overTime}</CardText>
                <CardText className='bg-light p-2 shadow'>
                    Lương: {(Salary.salaryScale * basicSalary + Salary.overTime * overTimeSalary).toFixed(0)}
                   
                </CardText>
            </CardBody>
       </Card>
    )

}

function Salary(props) {
    console.log(props)
    
    const salaryList = props.salary.map((item) => {
        return (
            <div className="col-12 col-md-6 col-lg-4 mt-2 mb-2" key={item.id}>
                <RenderSalary Salary={item}/>
            </div>
        )
    })
    return (
        <div className="contaienr">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/staff">Nhân Viên</Link>                    
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <h1> Bảng lương</h1>

            <div className=" row shadow m-3">{salaryList }</div>
        
        </div>
    )
  
}        

export default Salary