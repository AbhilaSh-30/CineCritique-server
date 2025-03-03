import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const searchMovie = async(req,res) =>{
    const { query } = req.params;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
      );
      res.json(response.data.results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}

export const searchTv = async(req,res) =>{
    const { query } = req.params;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${TMDB_API_KEY}&query=${query}`
      );
      res.json(response.data.results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}
export const searchPerson = async(req,res) =>{
  const { query } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/person?api_key=${TMDB_API_KEY}&query=${query}`
    );
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}