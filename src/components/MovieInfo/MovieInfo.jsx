import css from "./MovieInfo.module.css"

export default function MovieInfo({ movie }) {

    if (!movie) {
        return <div>Movie data is not available</div>;
    }

    const { title, release_date, tagline, genres, overview, vote_average, poster_path } = movie;

    return (
        <div className={css.infoConainer}>
            <div>
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="some image" className={css.image} />
            </div>
            <div>
                <h1>{title}</h1>
                <p className={css.text}><b>Release date:</b> {release_date}</p>
                <p className={css.text}><b>Rating:</b> {vote_average}</p>

                <h2>Overwiew</h2>
                <p className={css.text}>{overview}</p>

                <h2>Genres:</h2>
                <ul>
                    {genres.map((genre) => {
                        return <li key={genre.id} className={css.item}>{genre.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}