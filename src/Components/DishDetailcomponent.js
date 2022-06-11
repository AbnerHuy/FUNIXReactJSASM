import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem ,Nav,NavItem,Button} from 'reactstrap';
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";

function RenderDish({dish}) {
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} value={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if(comments != null){
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comments.map((comment) => {
                        return(
                            <li key={comment.id}>
                                <p>{comment.comment}</p>
                                <p>-- { comment.author }, { new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        );
                    })}
                </ul>
                <Nav className="ml-auto" nav>
                    <NavItem >
                        <Button outline  onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span> Submit Comment
                        </Button>

                    </NavItem>  
                </Nav>
            </div>
        );
    } else {
        return(
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if(props.dish != null){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                </div>                    
            </div>
        )
    }else{
        return(
            <div></div>
        );
    }  
}



export default DishDetail;