
import { Movie } from "../../interfaces/interfaces";
import { ratingsite } from "../../utils/RatingsByName";

import styles from "./styles.module.scss"

interface Props {
    movie: Movie | null;
}

export const DetailCard = ({ movie }: Props) => {

    return (
        <div className={styles.container}>

            <div>
                {movie?.Poster != 'N/A' ?
                    <img src={movie?.Poster} alt={movie?.Title} title={movie?.Title} className={styles.poster} /> :
                    <img src="/default.png" alt={movie?.Title} title={movie?.Title} className={styles.poster} />
                }
            </div>

            <div className={styles.containerText}>
                <p className={styles.genre}>{movie?.Genre}</p>
                <h1>{movie?.Title} {`(${movie?.Year})`}</h1>
                <p className={styles.agerating}>{movie?.Rated}</p>
                <p className={styles.plot}>{movie?.Plot} </p>
                <div className={styles.details}>
                    <p><span className={styles.emphasis}>Directed by:</span> <span>{movie?.Director}</span></p>
                    <p><span className={styles.emphasis}>Writer(s):</span> <span>{movie?.Writer}</span></p>
                    <p><span className={styles.emphasis}>Cast:</span> <span>{movie?.Actors}</span></p>
                    <p><span className={styles.emphasis}>Country:</span> <span>{movie?.Country}</span></p>
                    <p><span className={styles.emphasis}>Runtime:</span> <span>{movie?.Runtime}</span></p>
                    <div className={styles.ratingscontainer}>
                        {movie?.Ratings.map((ratings) => (
                            <div key={ratings.Source} className={styles.ratingcontainer} >
                                {/* @ts-ignore */}
                                <img src={ratingsite[ratings.Source]}
                                    alt={ratings.Source}
                                    className={styles.ratingimg}
                                    title={ratings.Source}
                                />
                                <div>{ratings.Value}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>



        </div>
    )
}