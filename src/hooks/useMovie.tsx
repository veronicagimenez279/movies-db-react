import { useEffect, useState } from "react";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=92880c31&plot=full&i=`;

export const useMovie = (params: String) => {
    const [isLoading, setIsLoading] = useState(true);
    const [detailerror, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchMovie = (url: any) => {
        setIsLoading(true);
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.Response === "True") {
                    //console.log("res: ", responseJson);
                    setData(responseJson.Search || responseJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            }).catch(() => setError(true));
    }

    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);
    }, [params])

    return { isLoading, detailerror, data }
}