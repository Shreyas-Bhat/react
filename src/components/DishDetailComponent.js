
//presentation component concerning with the looks and design
import React  from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
  if (dish != null) {
    return (
      <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
          </CardBody>
      </Card>
    );
  } else {
      return (
          <div></div>
    );
  }
}


    
   
    
function RenderComments({comments}){
 
  if(comments !=null){
  const commentList = comments.map((item)=>{ 
    return(
      <li>
        {item.comment}
        <br/><br/>
        -- {item.author},  {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
        <br/><br/>
      </li>
    );
  });
  return (
    <div className="col-12 col-md-5 m-1">
       
        {commentList}
    </div>
);
}else{
  return(
    <div></div>
  );
  
}
 
}

  

    
const DishDetail=(props) => {
  if(props.dish !=null){
  return(
    
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish = {props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <ul className="list-unstyled">
                <h4>Comments</h4>
                <RenderComments comments={props.dish.comments} />
            </ul>
        </div>
    </div>
);
  } 
  else {
    return (
        <div></div>
    );
}

  
}    



    
   

export default DishDetail;