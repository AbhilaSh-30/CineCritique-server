import express from 'express';
import { getMovie,getTv,getPerson } from '../controllers/detailsController.js';

const detailsRouter = express.Router();

detailsRouter.get('/movies/:id',getMovie);
detailsRouter.get('/tv/:id',getTv);
detailsRouter.get('/person/:id',getPerson);

export default detailsRouter;