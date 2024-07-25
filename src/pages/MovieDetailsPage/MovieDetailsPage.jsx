import { useState, useEffect, Suspense} from "react"
import { useParams, useLocation, Outlet, Link } from "react-router-dom"
import { fetchMovieById } from "../../tmdb"
import { BackLink } from "../../components/BackLink/BackLink"
import MovieInfo from "../../components/MovieInfo/MovieInfo"
import Loader from "../../components/Loader"
import Error from "../../components/Error"
import css from "./MovieDetailsPage.module.css"

export default function MovieDetailsPage (){

    const {movieId} = useParams()
    const location = useLocation();
    const backLinkHref = location.state ?? '/movies';

    const [movie, setMovie] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const data = await fetchMovieById(movieId)
                console.log(data)
                setMovie(data)
            } catch (error) {
                setError(true)
                setMovie(null)
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, []);


    return (
        <section className={css.section}>
        <BackLink to={backLinkHref}>Go back</BackLink>

        {loading && <Loader/>} 
        {error && <Error/>}
        {movie &&
        <div>
            <MovieInfo movie={movie}/>
        <div className={css.addContainer}>
            <h4>Additional information</h4>
                <ul className={css.addList}>
                    <li>
                    <Link to="cast" className={css.link}>Cast</Link>
                    </li>
                    <li>
                    <Link to="reviews" className={css.link}>Reviews</Link>
                    </li>
                </ul>
                </div>
           
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </div>
            }
        </section>
    )
}