import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const getMovie = async(req,res) =>{
    const { id } = req.params;
    try {
      console.log(id);
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}