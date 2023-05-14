import useCardsStore from "./store/store";
import CardsItem from "./components/CardsItem/CardsItem";


const Cards = () => {
    const {cards,getCards,deleteCard} = useCardsStore()

    return (<>
        <button onClick={()=>getCards()}>GetCards</button>
        {
            cards.map(card=> <CardsItem key={card.id}
                                            {...card}
                                        deleteCard={deleteCard}
                />
            )
        }
    </>)
}

export default Cards