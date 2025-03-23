import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  movieId: { type: Number, required: true },
  userName: { type: String, required: true },
  reviewText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const reviewModel = mongoose.model.review || mongoose.model("review", reviewSchema);

export default reviewModel;
