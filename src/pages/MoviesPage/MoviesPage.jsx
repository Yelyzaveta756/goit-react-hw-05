import { useState, useEffect } from "react";
import { fetchMovieByQuery } from "../../tmdb";
import { useSearchParams, useLocation } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import MovieList from "../../components/MovieList/MovieList";
import css from "./MoviesPage.module.css"


export default function MoviesPage(){

    const [searchMovies, setSearchMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const savedSearchQuery = searchParams.get("searchParams") ?? "";
    const [newQuery, setNewQuery] = useState(savedSearchQuery);

    const location = useLocation()

    const handleSearch = (value) => {
        searchParams.set("searchParams", value);
        setSearchParams(searchParams);
        setNewQuery(value);
      };

    useEffect(() => {
        async function getMovies() {
            try {
                setLoading(true)
                const data = await fetchMovieByQuery(newQuery)
                console.log(data)
                setSearchMovies(data.results)
            } catch (error) {
                setError(true)
                setSearchMovies([])
            } finally {
                setLoading(false)
            }
        }
        getMovies()
    }, [newQuery]);

    return (
        <section className={css.section}>
        <SearchForm onSubmit={handleSearch}/>
        {error && <Error />}
        {loading && <Loader/>}
        {searchMovies.length > 0 && <MovieList movies={searchMovies} location={location}/>}
        </section>
    )
}