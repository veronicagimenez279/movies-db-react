//the full list of movies that appear on the homepage upon searching a term

import { Link } from "react-router-dom";
import { SearchMovie } from "../../interfaces/interfaces";
import { MovieCard } from "../MovieCard";
import styles from "./styles.module.scss"

interface Props {
    movies: SearchMovie;
    error: Boolean
}


export const MoviesList = ({ movies, error }: Props) => {
    return (
        <div >
            {error && <p className={styles.text}>There was an error processing your request. Try again later.</p>}
            {/* @ts-ignore */}
            {(movies.Error == "Incorrect IMDb ID.") ?

                <p className={styles.text}>Search a movie or TV series</p>
                :
                <div>
                    {/* @ts-ignore */}
                    {(movies.Error) ? <p className={styles.text}>{movies.Error}</p>
                        :
                        <div>
                            <div className={styles.movielist}>

                                {/* @ts-ignore */}
                                {movies.map((result) => (

                                    <div key={result.imdbID} >
                                        <Link to={`/${result.imdbID}`} className={styles.link}>
                                            <MovieCard movie={result} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>


                    }
                </div>
            }</div>
    )
}
