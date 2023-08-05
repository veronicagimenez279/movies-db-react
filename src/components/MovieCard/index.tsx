import { useMovie } from "../../hooks/useMovie";
import { Search } from "../../interfaces/interfaces";
import styles from "./styles.module.scss"

interface Props {
    movie: Search | null;
}

export const MovieCard = ({ movie }: Props) => {

    const { data } = useMovie(movie?.imdbID!)

    return (
        <div>
            <div className={styles.card} title={movie?.Title}>
                {movie?.Poster != 'N/A' ?
                    <img src={movie?.Poster} alt={movie?.Title} /> :
                    <img src="/default.png" alt={movie?.Title} />
                }
                <div className={styles.moviedata}>
                    <p className={styles.year}>{movie?.Year}</p>
                    <h1>{movie?.Title}</h1>
                    {/* @ts-ignore */}
                    <p>{data?.Genre}</p><p>{data?.Country} </p>
                    <div className={styles.type}>{movie?.Type}</div>
                </div>
            </div>
        </div>
    )
}
