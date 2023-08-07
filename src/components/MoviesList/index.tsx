import { Link } from "react-router-dom";
import { Result, SearchMovie } from "../../interfaces/interfaces";
import { MovieCard } from "../MovieCard";
import { Loader } from "../Loader";

import styles from "./styles.module.scss"



interface Props {
    movies: SearchMovie | Result | null;
    error: Boolean
    isLoading: Boolean;
}


export const MoviesList = ({ movies, error, isLoading }: Props) => {

    if (isLoading) {
        return <div className={styles.text}><Loader /></div>
    }

    if (error) {
        return <p className={styles.text}>There was an error processing your request. Try again later.</p>
    }

    if (movies === null) {
        return <div></div>;
    }

    if ('Error' in movies) {
        return (
            <div>
                {(movies.Error == "Incorrect IMDb ID.")
                    ?
                    <p className={styles.text}>Search a movie or TV series</p>
                    :
                    <div>{(movies.Error) && <p className={styles.text}>{movies.Error}</p>}</div>
                }
            </div>
        )
    }

    return (
        <div>
            <div className={styles.movielist}>
                {movies.Search.map((result) => (

                    <div
                        key={result.imdbID}
                        aria-label={`Card for ${result.Title}`}>
                        <Link to={`/${result.imdbID}`} className={styles.link}>
                            <MovieCard movie={result} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>


    )
}



