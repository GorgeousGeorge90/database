import styles from "./MainCard.module.scss";


const MainCard = ({id,name,age,job,city,deleteCard,closeCard}) => {


    return (<li className={styles.card}>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Job:{job}</p>
        <p>City:{city}</p>
        <p onClick={deleteCard}>X</p>
        <p onClick={closeCard}>O</p>
    </li>)
}

export default MainCard