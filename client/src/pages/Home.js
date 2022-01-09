import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';

const Home = (props) => {
  const [destinations, setDestinations] = useState([]);
  let history = useHistory();

  useEffect(() => {
    getDestinations();
  }, []);
  const getDestinations = async () => {
    const res = await axios.get(`http://localhost:3001/api/destinations`);
    setDestinations(res.data.destinations);
  };

  return (
    <div>
      <h1>Haunted Destinations: Ireland</h1>
      <section className="destinations-display">
        <div className="destination-grid">
          {destinations.map((destination) => {
            return (
              <DestinationCard
                key={destination._id}
                onClick={() => history.push(`/destinations/${destination._id}`)}
                name={destination.name}
                image={destination.image}
                description={destination.description}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
export default Home;
