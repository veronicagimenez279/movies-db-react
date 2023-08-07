import { createContext, useState, useEffect } from "react"
import { Result, SearchMovie } from "../interfaces/interfaces";

interface ContextProps {
    movies: SearchMovie | Result | null;
    error: Boolean;
    isLoading: Boolean;
    searchMovies: (name: string, year: string, type: string) => void;

}

export const MovieContext = createContext<ContextProps>({} as ContextProps);


const MovieContextProvider = ({ children }: any) => {

    const [movies, setMovies] = useState<SearchMovie | Result | null>(null);
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true);


    const searchMovies = async (name: string, year: string, type: string) => {
        setIsLoading(true);
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=92880c31&type=${type}&y=${year}&s=${name}`);
            const data = await response.json();
            if (data) {
                setMovies(data);
                setIsLoading(false);
            }
        } catch (error) {
            setError(true);
            setIsLoading(false);
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
                isLoading,
                searchMovies
            }}>
            {children}
        </MovieContext.Provider>
    );
};

export default MovieContextProvider;
