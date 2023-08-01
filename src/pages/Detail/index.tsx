import { useParams } from "react-router-dom"
import { useMovie } from "../../hooks/useMovie";
import { DetailCard } from "../../components/MovieDetail";
import styles from "./styles.module.scss"

export const Detail = () => {
    const { imdbID } = useParams();
    const { isLoading, data } = useMovie(imdbID!)
    console.log(data)

    if (!data && !isLoading) {
        return (
            <div>The movie does not exist.</div>
        )
    }
    return (

        <div className={styles.detail}>
            {isLoading
                ?
                <div>Loading...</div>
                :
                <DetailCard movie={data!} />
            }

        </div>
    )

}