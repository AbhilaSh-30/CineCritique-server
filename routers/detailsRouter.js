import express from 'express';
import { getMovie } from '../controllers/detailsController.js';

const detailsRouter = express.Router();

detailsRouter.get('/movies/:id',getMovie);

export default detailsRouter;