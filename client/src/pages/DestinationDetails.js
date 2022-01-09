import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReviewCard from '../components/ReviewCard';
import ReviewForm from '../components/ReviewForm';

const DestinationDetails = (props) => {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getDestination = async () => {
    const res = await axios.get(
      `http://localhost:3001/api/destinations/${props.match.params.destinationId}`
    );
    setSelectedDestination(res.data.destination);
    console.log(res.data);
  };

  const getReviews = async () => {
    const res = await axios.get(`http://localhost:3001/api/reviews`);
    setReviews(res.data.reviews);
  };

  useEffect(() => {
    getDestination();
    getReviews();
  }, []);

  return selectedDestination ? (
    <div>
      <section className="destination-info">
        <h1>{selectedDestination.name}</h1>
        <img src={selectedDestination.url} />
        <p>{selectedDestination.description}</p>
      </section>
      <ReviewForm {...props} />
      {reviews.map((review) => {
        if (review.destination_id === props.match.params.destinationId) {
          return (
            <ReviewCard
              key={review._id}
              username={review.username}
              comments={review.comment}
              ratings={review.rating}
            />
          );
        } else {
          console.log('review does not match this destination');
        }
      })}
    </div>
  ) : null;
};
export default DestinationDetails;
