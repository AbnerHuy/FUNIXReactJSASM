import React,{Component} from "react";
import { Card, CardBody, CardImg, CardImgOverlay, CardText ,CardTitle} from "reactstrap";
import dateFormat from "dateformat";

 const columnChange = {
        column1 :"col-md-12 mt-1",
        column2 :"col-md-6 mt-1",
        column3 :"col-md-4 mt-1",
        column4: "col-md-3 mt-1",
        column6:"col-md-2 mt-1"
}
    let {column1,column2,column3,column4,column6}=columnChange
class StaffList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            onselectedStaff: null,
            classDefaul:'col-12 col-md-6 col-lg-4 mt-3'
        }
        
    }
   
    onStaffSelected(staff) {
        this.setState({
               onselectedStaff:staff
           })
       }
            
    onColumnSelected(col) {
        this.setState({
            classDefaul:col
        })
    }
    renderStaff(staff) {
        if (staff != null) {
            return(
            <div className="col-12">
            <Card>
                <CardBody>
                <CardTitle>{staff.name}</CardTitle>
                <CardText>Ngày Sinh:{dateFormat(staff.doB, "dd/mm/yyyy")}</CardText>
                <CardText>Ngày vào công ty :{dateFormat(staff.startDate, "dd/mm/yyyy")}</CardText>
                <CardText>Phòng ban:{staff.department.name}</CardText>
                <CardText>Số ngày nghỉ còn lại :{ staff.annualLeave}</CardText>
                    <CardText>Số ngày đã làm thêm :{staff.overTime}</CardText>
                    </CardBody>
                </Card>
                </div>
            )
        } else { 
            return(
                <div></div>
            )
        }
    
    }
    render() {
        // console.log(this.props.staffs)
        // console.log(this.state.classDefaul)
           const listItem = this.props.staffs.map(staff => {
               return (
                   <div className={this.state.classDefaul}>
                       <Card key={staff.id} onclick={() => this.onStaffSelected(staff)}>
                           <CardBody>
                               <CardTitle>{staff.name }</CardTitle>
                       </CardBody>

                    </Card>
                   </div>
               )
           })
        return (
            <div className="container">
                <div className="row m-3">
                    <button onclick={() => this.onColumnSelected(column1)} className="btn btn-info mr-5 "  > Cột 1</button>
                    <button onclick={() => this.onColumnSelected(column2)}  className="btn btn-info mr-5 " > Cột 2</button>
                    <button onclick={() => this.onColumnSelected(column3)}  className="btn btn-info mr-5 " > Cột 3</button>
                    <button onclick={() => this.onColumnSelected(column4)}  className="btn btn-info mr-5 " > Cột 4</button>
                    <button onclick={() => this.onColumnSelected(column6)}  className="btn btn-info mr-5 " > Cột 6</button>
                
                
                </div>
                <div className="row">{listItem}</div>
                <div className="row mt-5">
                    {this.renderStaff(this.state.onselectedStaff) }
                </div>
            
            </div>
        )
           
    }


}
export default StaffList