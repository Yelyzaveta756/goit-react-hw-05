import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Y2YyMmZkMzJmNmEwMzMwOTM1M2JkNjZmNjQ4NDQyMCIsIm5iZiI6MTcyMTY0MTU1Mi4yMDMyNDIsInN1YiI6IjY2OWJmNzgxZGE0ZTRmMTQzNjM3YjRjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7fsDKZfSJMbv2rb3f93C-QZvuzP4jqzVgEcPOHoWbxE'

export const fetchTrendingMovies = async () => {

    const options = {
        headers: {
          Authorization: `Bearer ${API_TOKEN}`,
        }
      };

      const response = await axios.get("trending/movie/day", options)
      
      return response.data;
}
