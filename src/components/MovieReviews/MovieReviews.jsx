import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../tmdb";
import css from "./MovieReviews.module.css"
import Error from "../Error";

export default function MovieReviews(){

    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const data = await fetchMovieReviews(movieId)
                console.log(data)
                setMovieReviews(data.results)
            } catch (error) {
                setError(true)
                setMovieReviews([])
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, []);

return (
    <div>
        {loading && <p>Review list is loading. Please wait...</p>} 
        {error && <Error/>}
        {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map((review) => {
            return (
                <li key={review.id} className={css.listItem}>
                <p className={css.text}>{review.content}</p>
                <p className={css.title}>Author: {review.author}</p>
            </li>
            );
          })}
        </ul>
      ) : (
        "There is no reviews for this movie"
      )}
        
    </div>
)
}