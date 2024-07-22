import { Link, useLocation } from "react-router-dom"

export default function MoviesList({ movies }){

const location = useLocation()
    
    return (
        <div>
            <ul>
                {movies.map((movie)=> {
                    return(
                <li key={movie.id}>
                {/* <Link to={`/movies/:${id}`} state={{ from: location }}></Link> */}
                </li>
                )})}
            </ul>
        </div>
    )
}