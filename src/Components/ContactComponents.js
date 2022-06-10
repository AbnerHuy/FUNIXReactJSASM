import { offset } from '@popperjs/core';
import React,{Component} from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
import { FormGroup } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem,Button,ButtonGroup,Form,Label ,Col,Input,Row,FormFeedback} from 'reactstrap';

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email:false
            }
            
        }
        this.handelSubmit=this.handelSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handelblur = this.handelblur.bind(this);

    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        })
        
    }

    handelSubmit(event) {
        console.log("Current State in :" + JSON.stringify(this.state));
        alert("Current State in :" + JSON.stringify(this.state));
        event.preventDefault();
    }

    handelblur = (field) => (evt) => {
        this.setState({
            touched:{...this.state.touched,[field]:true}
        })
    }

    validate(firstname, lastname, email, telnum) {
        const error = {
            firstname: '',
            lastname: '',
            email: '',
            telnum:'',
        }

        if (this.state.touched.firstname && firstname.length < 3) {
            error.firstname="First name should be > 3 charracter"
        } else if (this.state.touched.firstname && firstname.length >= 10) {
            error.firstname="First name should be <=10 charracter"
        } 

         if (this.state.touched.lastname && lastname.length < 3) {
            error.lastname="Last name should be >3 charracter"
        } else if (this.state.touched.lastname && lastname.length >= 10) {
            error.lastname="Last name should be <=10 charracter"
        } 

        const reg = /^\d+$/
        if (this.state.touched.telnum && !reg.test(telnum)) {
            error.telnum="Tel.Num should contain  only number"
        }

        if (this.state.touched.email && email.split('').filter(x => x === "@").length !== 1) {
            error.email="Email should contain a @"
        }
        return error
    }


    render() {
        const error= this.validate(this.state.firstname,this.state.lastname,this.state.email,this.state.telnum)
        return(
            <div className="container">
            <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                    </div>
                </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Sen us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handelSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name"
                                        value={this.state.firstname} onBlur={this.handelblur("firstname")}
                                        valid={error.firstname === ''}
                                        invalid={error.firstname!==''}
                                        onChange={this.handleInputChange}
                                        />
                                    <FormFeedback>{ error.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>

                             <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name"
                                        value={this.state.lastname}
                                        valid={error.lastname === ''}
                                        invalid={error.lastname!==''}
                                        onBlur={this.handelblur("lastname")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{ error.lastname}</FormFeedback>
                                    
                                </Col>
                            </FormGroup>

                             <FormGroup row>
                                <Label htmlFor="telnum" md={2}> Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder=" Tel. Number"
                                        value={this.state.telnum}
                                        valid={error.telnum === ''}
                                        invalid={error.telnum!==''}
                                        onBlur={this.handelblur("telnum")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{ error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" id="email" name="email" placeholder="Email "
                                        value={this.state.email}
                                        valid={error.email === ''}
                                        invalid={error.email!==''}
                                        onBlur={this.handelblur("email")}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{ error.email}</FormFeedback>
                                </Col>
                            </FormGroup>
                            
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name='agree' checked={this.state.agree}
                                                onChange={this.handleInputChange} />{''}
                                            <strong> May We Contact You ?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType}
                                    onChange={this.handleInputChange}>
                                        <option >Tel.</option>
                                        <option >Email</option>
                                    </Input>
                                </Col>

                            </FormGroup>

                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Your Feedback </Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12"
                                        value={this.state.message} onChange={this.handleInputChange} />
                                </Col>
                            </FormGroup>

                            <FormGroup>
                                <Col md={{ size: 12, offset: 2 }}>
                                    <Button type='submit' color='primary'>
                                        Send Feedback
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
        </div>
    );
}
}

export default Contact;