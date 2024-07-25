import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YyMmZkMzJmNmEwMzMwOTM1M2JkNjZmNjQ4NDQyMCIsIm5iZiI6MTcyMTY0MTU1Mi4yMDMyNDIsInN1YiI6IjY2OWJmNzgxZGE0ZTRmMTQzNjM3YjRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fsDKZfSJMbv2rb3f93C-QZvuzP4jqzVgEcPOHoWbxE'

export const fetchTrendingMovies = async () => {

    const options = {
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_TOKEN}`,
        }
      };

      const response = await axios.get("trending/movie/day?language=en-US", options)
      
      return response.data;
}

export const fetchMovieByQuery = async (query) => {

  const options = {
    params: {
      query,
    },
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  const response = await axios.get("search/movie?language=en-US", options)

  return response.data;

}

export const fetchMovieById = async (movieId) => {

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  const response = await axios.get(`movie/${movieId}?language=en-US`, options)

  return response.data;

}

export const fetchMovieCredits = async (movieId) => {

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  const response = await axios.get(`movie/${movieId}/credits?language=en-US`, options)

  return response.data;

}

export const fetchMovieReviews = async (movieId) => {

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    }
  };

  const response = await axios.get(`movie/${movieId}/reviews?language=en-US`, options)

  return response.data;

}
