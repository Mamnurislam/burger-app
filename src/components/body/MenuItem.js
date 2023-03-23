import React from 'react'
import {Card,CardBody,CardImg,CardImgOverlay,CardTitle} from "reactstrap"

export default function MenuItem(props) {
   
  return (
    <div className='m-2'>
        <Card>
            <CardBody onClick={props.dishselect} style={{cursor:'pointer'}}>
                <CardImg 
                  width="100%"
                  src={props.dishes.image}
                  alt={props.dishes.name}
                  style={{opacity:"0.5"}}
                  
                />
                <CardImgOverlay>
                    <CardTitle style={{textAlign:'center',fontWeight:"bold"}}  >{props.dishes.name}  </CardTitle>
                </CardImgOverlay>
            </CardBody>
        </Card>
    </div>
  )
}
