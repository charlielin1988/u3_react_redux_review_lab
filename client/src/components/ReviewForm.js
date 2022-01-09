import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

const ReviewForm = (props) => {
  const [newReview, setNewReview] = useState({
    username: ``,
    comments: ``,
    ratings: ``,
    destination_id: props.match.params.destinationId
  });
  const submit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/api/reviews`, {
      username: newReview.username,
      comments: newReview.comments,
      ratings: newReview.ratings,
      destination_id: newReview.destination_id
    });
    let diffReview = {
      username: ``,
      comments: ``,
      ratings: ``
    };
    setNewReview(diffReview);
    window.location.reload();
  };
  const handle = (e) => {
    const newestReview = { ...newReview };
    newestReview[e.target.id] = e.target.value;
    setNewReview(newestReview);
    console.log(newestReview);
  };

  return (
    <div className="review-form">
      <h1 className="form-title">Review Destination</h1>
      <form onSubmit={(e) => submit(e)}>
        <section className="inputs">
          <section className="input-name">
            UserName:
            <input
              type="text"
              name="username"
              value={newReview.username}
              onChange={(e) => handle(e)}
              type="text"
              id="username"
            />
          </section>
          <section className="input-cont">
            Comment:{' '}
            <input
              type="text"
              name="comments"
              value={newReview.comments}
              onChange={(e) => handle(e)}
              type="text"
              id="comments"
            />
          </section>
          <section className="input-cont">
            Rating from 1-5:{' '}
            <input
              type="number"
              name="ratings"
              value={newReview.ratings}
              onChange={(e) => handle(e)}
              type="number"
              id="ratings"
            />
          </section>
        </section>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};
export default ReviewForm;
