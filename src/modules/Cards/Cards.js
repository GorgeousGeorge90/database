import useCardsStore from "./store/store";
import CardsItem from "./components/CardsItem/CardsItem";
import styles from './Cards.module.scss';
import {useEffect} from "react";


const Cards = () => {

    const {cards,getCards,deleteCard,getCardsTo} = useCardsStore()

    useEffect(()=> {
        getCards()
    },[])

    return (<ul className={styles.cards}>
        {
            cards.map(card=> <CardsItem key={card.id}
                                            {...card}
                                            getCardsTo={getCardsTo}
                                            deleteCard={deleteCard}
                />
            )
        }
    </ul>)
}

export default Cards