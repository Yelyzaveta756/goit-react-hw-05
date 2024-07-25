import { useLocation } from "react-router-dom"
import MovieCard from "../MovieCard/MovieCard"
import css from "./MoviesList.module.css"

export default function MoviesList({ movies }){

const location = useLocation()
    
    return (
        <div className={css.container}>
            <ul className={css.list}>
                {movies.map((movie)=> {
                return(
                <li className={css.items} key={movie.id}>
                <MovieCard movie={movie} location={location}></MovieCard>
                </li>
                )})}
            </ul>
        </div>
    )
}