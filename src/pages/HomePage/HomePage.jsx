import { fetchTrendingMovies } from "../../tmdb"
import { useEffect,useState } from "react"
import Loader from "../../components/Loader"
import MoviesList from "../../components/MoviesList/MoviesList"

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
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, []);
    return (
       <section>
        <h1>Trending today</h1>
        {error}
        {loading && <Loader/>}
        {trendingMovies.length > 0 && <MoviesList movies={trendingMovies}/>}
       </section>
    )
}