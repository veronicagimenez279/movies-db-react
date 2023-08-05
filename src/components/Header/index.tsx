import ColorSchemeButton from '../ColorSchemeButton'
import styles from './styles.module.scss'

export const Header = () => {
    return (
        <div>
            <div className={styles.themebutton}><ColorSchemeButton /></div>
            <header className={styles.header}>

                <div className={styles.container}>
                    <a href={'/'}>
                        <span><img src='/film.svg' alt='m&sdb logo' /></span>
                        <span>M&TV<span className={styles.db}>DB</span></span>
                        <span className={styles.title}>Movie & TV Database</span>
                    </a>
                </div>
            </header>
        </div>



    )
}
