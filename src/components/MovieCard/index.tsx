import { useMovie } from "../../hooks/useMovie";
import { Search } from "../../interfaces/interfaces";
import { Loader } from "../Loader";
import styles from "./styles.module.scss"

interface Props {
    movie: Search | null;
}

export const MovieCard = ({ movie }: Props) => {

    const { isLoading, data } = useMovie(movie?.imdbID!)

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
                    {isLoading
                        ? <Loader />
                        /* @ts-ignore */
                        : <span><p>{data?.Genre}</p><p>{data?.Country} </p></span>
                    }

                    <div className={styles.type}>{movie?.Type}</div>
                </div>
            </div>
        </div>
    )
}
