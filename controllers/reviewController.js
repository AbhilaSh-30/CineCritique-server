import reviewModel from "../models/reviewModel.js";

export const createReview = async (req, res) => {
  try {
    const { movieId, userName, reviewText } = req.body;
    if (!movieId || !userName || !reviewText ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newReview = new reviewModel({
      movieId,
      userName,
      reviewText,
    });

    await newReview.save();
    res.status(201).json({ message: "Review created successfully", newReview });
  } catch (error) {
    res.status(500).json({ message: "Error creating review", error: error.message });
  }
};

export const getReviewsByMovieId = async (req, res) => {
  try {
    const { movieId } = req.params;
    if (!movieId) {
      return res.status(400).json({ message: "Movie ID is required" });
    }

    const reviews = await reviewModel.find({ movieId });
    if (reviews.length === 0) {
      return res.status(404).json({ message: "No reviews found for this movie" });
    }

    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reviews", error: error.message });
  }
};
