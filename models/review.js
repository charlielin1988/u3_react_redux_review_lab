const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Review = new Schema(
  {
    username: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: false },
    review_id: { type: Schema.Types.ObjectId, ref: 'destinations' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('reviews', Review);
