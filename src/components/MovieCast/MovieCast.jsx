import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../tmdb";
import css from "./MovieCast.module.css"
import Error from "../Error";

export default function MovieCast(){

    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const data = await fetchMovieCredits(movieId)
                console.log(data)
                setMovieCast(data.cast)
            } catch (error) {
                setError(true)
                setMovieCast([])
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, [movieId]);

return (
    <div>
        {loading && <p>Cast list is loading. Please wait...</p>} 
        {error && <Error/>}
        <ul className={css.list}>
            {movieCast.map(({ id, name, profile_path, character })=> {
                return <li key={id} className={css.item}>
                        <img src={ profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}`: 'https://via.placeholder.com/150' } alt={name} />
                        <p className={css.text}>{name}</p>
                        <p className={css.text}>Character: {character}</p>
                </li>
            })}
        </ul>
    </div>
)
}