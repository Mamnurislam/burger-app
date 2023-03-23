import React from 'react'
export default function LoadComent(props) {
  return (
    props.comments.map((comment)=>{
        return(
          
            
                <div key={comment.id}>
                    <h2>Author: {comment.author}</h2>
                    <p>Comment: {comment.comment}</p>
                   <p>Ratting: {comment.rating}</p>
                   <p>Date: {comment.date}</p>
                </div>
         
        )
    })
  )
}
