import styles from "./styles.module.scss"


export const Author = () => {
    return (
        <div className={styles.footer}>
            <div>Created by <a href="https://github.com/veronicagimenez279"><span>Verónica Gimenez</span></a></div>
            <div>Powered by <a href="https://www.omdbapi.com/"><span>OMDB API</span></a> </div>
        </div>
    )
}
