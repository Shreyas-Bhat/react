
//presentation component concerning with the looks and design
import React,{Component}  from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader,Button,Row,Col,Label} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from "react-redux-form";



const required = (val) =>val && val.length;
const maxLength=(len)=>val=>!val||val.length<=len;
const minLength=(len)=>val=> val && val.length>=len;


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
  } 
}


    
   
    
function RenderComments({comments, addComment, dishId}){
 
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
    <div className="col-12 m-1">
      <h4>Comments</h4>
      <ul className="list-unstyled">
        {commentList}
      </ul>
        <CommentForm dishId={ dishId } addComment={addComment} />
      
       
    </div>
);
}
 
}

  

    
const DishDetail=(props) => {
  if(props.dish !=null){
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
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} 
            
            addComment={props.addComment}
            dishId={props.dish.id}
            />
            
            
        </div>
    </div>
    </div>
    
     
       
);
  
}
else{
  return(
    <div></div>
  );
}
}

class CommentForm extends Component{
  constructor(props){
    super(props);
    this.state={
      isModalOpen: false
    };
    this.toggleModal=this.toggleModal.bind(this);
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values){
    this.toggleModal();
    
    this.props.addComment(this.props.dishId,values.rating,values.author,values.comment);
  }

  render(){
    return(
      <React.Fragment>
     
         <Button outline onClick={this.toggleModal}>
            <span className="fa fa-edit fa-lg"></span>Submit Comment
          </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} >Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={12}>Rating</Label>
                <Col md={12}>
                  <Control.select model=".rating" id=".rating" name=".rating" className="form-control">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="name" md={12}>Your Name</Label>
                <Col md={12}>
                  <Control.text model=".name" name=".name" id=".name" className="form-control" placeholder="Author Name"
                  validators={{
                    required,
                    minLength: minLength(3),
                    maxLength: maxLength(15)

                  }}/>
                  <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Required",
                    minLength: "Must be greater than 2 characters",
                    maxLength: "Must be less than 15 characters"
                  }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
              <Label htmlFor="comment" md={12}>Comment</Label>
                <Col md={12}>
                  <Control.textarea model=".message" id="message" rows="6" className="form-control" name="message" />
                </Col>
              </Row>
              <Row className="form-group">
                <Col>
                  <Button type="submit" value="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
               
            


            </LocalForm>
          </ModalBody>
        </Modal>
      

   
      </React.Fragment>
    );
  }

}




 



export default DishDetail;



