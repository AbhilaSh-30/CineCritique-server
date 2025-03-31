import axios from 'axios';

const TMDB_API_KEY = process.env.TMDB_API_KEY;

export const getMovie = async (req, res) => {
  const { id } = req.params;

  const urls = {
    details: `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`,
    credits: `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${TMDB_API_KEY}`,
    images: `https://api.themoviedb.org/3/movie/${id}/images?api_key=${TMDB_API_KEY}`,
    recommendations: `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${TMDB_API_KEY}`,
    videos: `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}`,
    watchProviders: `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${TMDB_API_KEY}`,
    releaseDates: `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${TMDB_API_KEY}`,
  };

  try {

    const requests = Object.values(urls).map(url => 
      axios.get(url).catch(error => {
        console.error(`Failed to fetch ${url}:`, error.message);
        return { data: null };
      })
    );

    const [
      details,
      credits,
      images,
      recommendations,
      videos,
      watchProviders,
      releaseDates,
    ] = await Promise.all(requests);

    // console.log(details.data);

    // Extract Indian release date and certification
    const indiaRelease = releaseDates.data.results.find(
      (item) => item.iso_3166_1 === "IN"
    );

    const indianReleaseInfo = indiaRelease
      ? indiaRelease.release_dates.map(({ certification, release_date }) => ({
          certification,
          release_date,
        }))
      : null;

    // console.log(details.data);

    res.json({
      details: details.data,
      credits: credits.data,
      images: images.data,
      recommendations: recommendations.data,
      videos: videos.data,
      watchProviders: watchProviders.data,
      indianReleaseInfo,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getTv = async(req,res) =>{
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const getPerson = async(req,res) =>{
  const { id } = req.params;
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
