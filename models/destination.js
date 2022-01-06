const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Destination = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    image: { type: String, required: false }
  },
  { timestamps: true }
);

module.exports = mongoose.model('destinations', Destination);
