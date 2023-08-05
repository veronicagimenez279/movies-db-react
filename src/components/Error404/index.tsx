import styles from "./styles.module.scss"
import { PiSmileySad } from 'react-icons/pi';

export const Error404 = () => {
    return (
        <div className={styles.container}>
            <PiSmileySad size={"10em"} />
            <p>Sorry, the page you're looking for doesn't exist.</p>
        </div>
    )
}
