import React from 'react'
import '../App.css'
import axios from 'axios'

const ReviewCard = (props) => {
  console.log(props)
  return(
    <div className = 'review-card'>
      <section className = 'review-card-info-wrapper'>
       <h3>Reviews</h3>
       <h4>Username:{props.username}</h4>
       <h5>Rating: {props.rating}</h5>
       <p className='review-comment'>Comment: {props.comment}</p>
       <button className ='delete-comment'
       onClick={props.onClick}
       id={props._id}
       {...props}>
         Delete Review 
       </button>
      </section>
      
    </div>
  )
}

export default ReviewCard 