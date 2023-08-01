import { useMovie } from "../../hooks/useMovie";
import { Search } from "../../interfaces/interfaces";
import styles from "./styles.module.scss"

//it's how the individual movies will appear on the homepage as a list upon being searched

interface Props {
    movie: Search | null;
}

export const MovieCard = ({ movie }: Props) => {

    const { isLoading, data } = useMovie(movie?.imdbID!)

    console.log(data)
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
