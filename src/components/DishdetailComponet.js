import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish}){
  
    return (
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
 function RenderComment(comments) {
    if (comments != null) {
      return (
        <div className="col-12 col-md-5 m1">
          <h4>Comments</h4>
          <ul>
            {comments.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    {comment.author},{comment.date}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      <div></div>;
    }
  }
const DishDetail = (props) => {
      if (props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <RenderDish dish={props.dish}/>
            <RenderComment Comments={props.dish.comment}/>
          </div>
        </div>
      );
    } else {
      <div></div>;
    }

  }
  
 

export default DishDetail;
