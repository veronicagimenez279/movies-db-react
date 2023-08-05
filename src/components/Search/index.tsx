import { useState, useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import { MoviesList } from "../MoviesList";
import styles from "./styles.module.scss"
import { Message } from "./components/Message";

const FormSearch = () => {
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [type, setType] = useState("")
    const { isLoading, movies, error, searchMovies } = useContext(MovieContext);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        searchMovies(title, year, type);
    }

    return (
        <div>
            <div className={styles.form}>
                <div className={styles.container}>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search movies, TV series"
                            className={styles.movietitle}
                            required
                            onChange={e => setTitle(e.target.value)} />
                        <input
                            type="number"
                            placeholder="Year"
                            className={styles.year}
                            onChange={e => setYear(e.target.value)} />

                        <select
                            defaultValue={""}
                            name="type"
                            className={styles.searchinput}
                            onChange={e => setType(e.target.value)}>
                            <option value="">Any</option>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                        <input
                            type="submit"
                            value="Search"
                            className={styles.search} />
                    </form>



                </div>

                <MoviesList error={error} movies={movies} isLoading={isLoading} />

                {/* When there are no movies to show, it will show the message */}
                {movies?.Response == "False" && <Message />}
            </div>


        </div>
    )
}

export default FormSearch;


