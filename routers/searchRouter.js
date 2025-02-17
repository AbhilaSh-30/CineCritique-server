import express from 'express';
import { searchMovie, searchTv } from '../controllers/searchController.js';

const searchRouter = express.Router();

searchRouter.get('/movies/:query',searchMovie);
searchRouter.get('/tv/:query',searchTv);

export default searchRouter;