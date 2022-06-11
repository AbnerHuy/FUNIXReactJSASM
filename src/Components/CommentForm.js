import React,{Component} from "react";
import { Label, Button, Modal, ModalHeader, ModalBody, Row, Col,Input,FormGroup,Form } from "reactstrap";
import { Control, LocalForm, Errors, } from "react-redux-form"

class CommentForm extends Component{
    constructor(props) {
        super(props)
        this.state = {
            isModalOpen: false,
            isNavOpen:false
        }
        this.togglemodal=this.togglemodal.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
    }
    togglemodal() {
        this.setstate({
        isModalOpen:!this.stateisModalOpen
    })
    }
    handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    render() {
        return (
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                               <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                        
                    </ModalBody>
                </Modal>
                )
}

}
export default CommentForm