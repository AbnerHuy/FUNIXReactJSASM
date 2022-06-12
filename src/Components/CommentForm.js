import React,{Component} from "react";
import { Label, Button, Modal, ModalHeader, ModalBody, Row, Col,Input,FormGroup,Form } from "reactstrap";
import { Control, LocalForm, Errors, } from "react-redux-form"

const required = (val) => (val) && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


class CommentForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
           isModalOpen: false,
            isNavOpen:false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin=this.handleLogin.bind(this)
    }
     toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return (
            <div>
                      <Button outline  onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span> Submit Comment
                        </Button>

                     <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit comment</ModalHeader>
                    <ModalBody>
                               <LocalForm onSubmit={this.handleLogin}>
                            <Row>
                                <Col>
                                      <Label htmlFor="select">Rating</Label>
                                    <Control.select model=".select"
                                        name="select"
                                       className='form-control'>
                                        <option >1</option>
                                        <option >2</option>
                                        <option >3</option>
                                        <option >4</option>
                                        <option >5</option>
                                    </Control.select>
                                </Col>
                              
                                
                            </Row>
                            <Row>
                                <Col  >
                                     <Label htmlFor="yourname">Your Name</Label>
                                    <Control.text model=".yourname" id="yourname" name="yourname" className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength:maxLength(15)
                                        }}
                                         />
                                <Errors
                                        className='text-danger'
                                        model=".yourname"
                                        show="touched"
                                        messages={{
                                            required: "Required",
                                            minLength:"Must be greater than 2 character",
                                            maxLength:"Must be 15 character or less"
                                        }}

                                    />
                                </Col>
                               
                            </Row>
                            <Row >
                                <Col >
                                    <Label htmlFor ="comment" > Comment</Label>
                                    <Control.textarea model=".comment" name="comment" id ="comment" className="form-control"
                                     />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="submit" value="submit" color="primary">Submit</Button>
                                </Col>
                            </Row>
                          
                        </LocalForm>
                        
                    </ModalBody>
                </Modal>

            </div>
                    
           
            
                   
                )
}

}
export default CommentForm