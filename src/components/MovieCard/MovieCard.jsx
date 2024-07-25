import { Link } from "react-router-dom"
import css from "./MovieCard.module.css"

export default function MovieCard({movie: { id, title, poster_path }, location}){
    
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className={css.trendingImageContainer}>
            <Link to={`/movies/${id}`} state={location} className={css.trendingLink}>
            <img src={poster_path ? `${BASE_IMAGE_URL}${poster_path}` : 'https://via.placeholder.com/150'}
            alt={title}
            width="300"
            height="460" />
            <p className={css.trendTitle}>{title}</p>
            </Link>
        </div>
    )
}