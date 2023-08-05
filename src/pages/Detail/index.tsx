import { useParams } from "react-router-dom"
import { useMovie } from "../../hooks/useMovie";
import { DetailCard } from "../../components/MovieDetail";
import styles from "./styles.module.scss"
import { Error404 } from "../../components/Error404";
import { Loader } from "../../components/Loader";

export const Detail = () => {
    const { imdbID } = useParams();
    const { isLoading, data } = useMovie(imdbID!)


    if (!data && !isLoading) {
        return (
            <Error404 />
        )
    }
    return (

        <div className={styles.detail}>
            {isLoading
                ?
                <Loader />
                :
                <DetailCard movie={data!} />
            }

        </div>
    )

}