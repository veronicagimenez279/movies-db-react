import styles from './styles.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <div>
                <a href={'/'}>
                    <span><img src='/film.svg' /></span>
                    <span>M&S</span>
                    <span style={{ color: "#FFC000" }}>DB</span>
                    <span className={styles.title}>The Movies & Series Database</span>
                </a>
            </div>
        </header>


    )
}
