import { fetchTrendingMovies } from "../../tmdb"
import { useEffect,useState } from "react"
import Loader from "../../components/Loader"
import Error from '../../components/Error'
import MoviesList from "../../components/MoviesList/MoviesList"
import css from "./HomePage.module.css"

export default function HomePage(){

    const [trendingMovies, setTrendingMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getMovies (){
            try {
                setLoading(true)
                const data = await fetchTrendingMovies()
                console.log(data)
                setTrendingMovies(data.results)
            } catch (error) {
                setError(true)
                setTrendingMovies([])
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, []);
    return (
       <section className={css.section}>
        {error && <Error />}
        {loading && <Loader/>}
        {trendingMovies.length > 0 && 
        <div>
            <h1 className={css.trendingTopic}>Trending today</h1>
            <MoviesList movies={trendingMovies}/>
        </div>
        }
       </section>
    )
}