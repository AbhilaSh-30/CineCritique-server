import express from 'express';
import { searchMovie, searchTv, searchPerson } from '../controllers/searchController.js';

const searchRouter = express.Router();

searchRouter.get('/movies/:query',searchMovie);
searchRouter.get('/tv/:query',searchTv);
searchRouter.get('/person/:query',searchPerson);

export default searchRouter;