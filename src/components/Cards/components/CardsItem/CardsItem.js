import styles from './CardItem.module.scss';


const CardsItem = ({id,name,age,job,city,deleteCard}) => {


    return (<div className={styles.card}>
        <p>Id:{id}</p>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
        <p>Job:{job}</p>
        <p>City:{city}</p>
        <p onClick={()=>deleteCard(id)}>X</p>
    </div>)
}

export default CardsItem