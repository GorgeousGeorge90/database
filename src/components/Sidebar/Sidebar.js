import styles from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {

    const stylesLink = ({isActive}) => {

        return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "orange" : "",
        };
    }

    return (<nav className={styles.nav}>
        <ul>
            <li><NavLink style={stylesLink} to='cards'>Show all cards</NavLink></li>
            <li><NavLink style={stylesLink} to='new'>Create new card</NavLink></li>
            <li><NavLink style={stylesLink} to='gallery'>Gallery</NavLink></li>
            <li><NavLink style={stylesLink} to='/'>Contacts</NavLink></li>
        </ul>
    </nav>)
}

export default Sidebar