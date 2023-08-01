import { createContext, useState, useEffect } from "react"
import { Result, SearchMovie } from "../interfaces/interfaces";

interface ContextProps {
    movies: SearchMovie | Result;
    error: Boolean;
    searchMovies: (name: string, year: string, type: string) => void;

}

export const MovieContext = createContext<ContextProps>({} as ContextProps);


const MovieContextProvider = ({ children }: any) => {
    /* @ts-ignore */
    const [movies, setMovies] = useState<SearchMovie>([]);
    const [error, setError] = useState(false)



    const searchMovies = async (name: string, year: string, type: string) => {
        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=92880c31&type=${type}&y=${year}&s=${name}`);
            const data = await response.json();
            //console.log('movies from moviecontext', data)
            if (data.totalResults) {
                setMovies(data.Search);
            } else {
                /* @ts-ignore */
                setMovies(data);
            }
        } catch (error) {
            setError(true);
        }
    };

    useEffect(() => {
        searchMovies('', '', '');
    }, []);

    return (
        <MovieContext.Provider
            value={{
                movies,
                error,
                searchMovies
            }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
