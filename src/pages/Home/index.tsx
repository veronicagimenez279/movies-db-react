import { Author } from '../../components/Author';
import FormSearch from '../../components/Search';
import styles from './styles.module.scss'

export const Home = () => {
    return (
        <div>
            <div className={styles.home}>
                <FormSearch />

            </div>
            <div className={styles.author}>
                <Author />
            </div>
        </div>

    );
};

