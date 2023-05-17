import styles from './Header.module.scss';
import {ReactComponent as Logo} from './../../assets/img/database.svg';
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";


const Header = () => {


    return (<header>
        <div className={styles.container}>
            <div className={styles.logo}>
                <Logo height={'50px'}/>
            </div>
            <div className={styles.title}>
                <h2>DataBase</h2>
                <p>Make you own database!</p>
            </div>
            <div className={styles.btn}>
                <ThemeSwitcher/>
            </div>
        </div>
    </header>)
}

export default Header