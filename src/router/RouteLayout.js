import {Outlet} from 'react-router-dom';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from  './RouteLayout.module.scss';


const RouteLayout = () => {


    return (<div className={styles.container}>
        <Header/>
        <Sidebar/>

        <main>
            <Outlet/>
        </main>
    </div>)
}

export default RouteLayout