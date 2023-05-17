import styles from './BaseCard.module.scss';

const BaseCard = ({id,name,openMode,select,updateCard}) => {

    return (<li className={styles.card}>
        <p>Id:{id}</p>
        <p>{name}</p>
        <p onClick={openMode}>x</p>
        <p onClick={()=>updateCard(id,!select)}>HELLO!</p>
    </li>)
}

export default BaseCard