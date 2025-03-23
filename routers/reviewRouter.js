import express from "express";
import { createReview,getReviewsByMovieId } from "../controllers/reviewController.js";

const reviewRouter = express.Router();

reviewRouter.post('/review',createReview);
reviewRouter.get('/review/:movieId',getReviewsByMovieId);

export default reviewRouter;