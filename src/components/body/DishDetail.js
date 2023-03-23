import React from 'react'
import LoadComent from './LoadComent'
import {Card,CardBody,CardImg,CardTitle,CardText} from "reactstrap"
export default function DishDetail(props) {
   
  return (

    <Card>
    <CardBody>
        <CardImg 
          width="100%"
          src={props.dishselect.image}
          alt={props.dishselect.name}
        
        />
        
            <CardTitle style={{textAlign:'center',fontWeight:"bold"}} >{props.dishselect.name}</CardTitle>
            <CardText>
              {props.dishselect.description}
            </CardText>
            <CardText> {props.dishselect.price}</CardText>
            {/* <hr /> */}
            <LoadComent comments={props.dishselect.comments}/>
    </CardBody>
</Card>


  )
}
