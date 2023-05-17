import { create } from 'zustand';
import {cardsApi} from "../api/api";




const useCardsStore = create((set, get) => ({
    cards: [],
    currentCard: null,
    getCards: async () => {
        const data = await cardsApi.getCards()
        set({cards:data})
    },
    updateCard: async (id,select) => {
        await cardsApi.selectCard(id,select)
        const card = get().cards.find(card => card.id === id)
        card.select = !card.select
        console.log(card)
    },
    selectCard: name => {
        const cards = get().cards
        set({currentCard: cards.find(card => card.name === name)})
    },
    deleteCard: async id => {
        await cardsApi.deleteCard(id)
        const cards = get().cards
        set({cards:cards.filter(card => card.id !== id)})

    }
}))


export default useCardsStore