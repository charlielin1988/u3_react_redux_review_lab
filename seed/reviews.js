const db = require('../db');
const Destination = require('../models/destination');
const Review = require('../models/review');

db.on('error', console.error.bind(console, 'MongoDB Connection error:'));

const main = async () => {
  const bellgally = await Destination.find({
    name: 'Bellgally Castle, County Antrim'
  });
  const loftus = await Destination.find({
    name: 'Loftus Hall, County Wexford'
  });

  const reviews = [
    {
      username: 'xxSnakeEyeKillahxx',
      comment: 'Too many stairs, not enough ghosts',
      rating: 1,
      review_id: bellgally[0]._id
    },
    {
      username: 'xxSnakeEyeKillahxx',
      comment: 'Really creepy!',
      rating: 5,
      review_id: loftus[0]._id
    }
  ];
  await Review.insertMany(reviews);
  console.log('Reviewing Ghosts');
};

const run = async () => {
  await main();
  db.close();
};

run();
