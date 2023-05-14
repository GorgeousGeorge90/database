import { create } from 'zustand';
import {cardsApi} from "../api/api";




const useCardsStore = create((set, get) => ({
    cards: [
        {
            id: 10, name: 'Egor', age: 32, job: 'Web Developer', city:'Moscow',
        },
        {
            id: 2, name: 'Alex', age: 40, job: 'Cooker', city:'Tbilisi',
        }
    ],
    getCards: async () => {
        const data = await cardsApi.getCards()
        const cards = get().cards
        set({cards:[...cards,...data]})
    },
    deleteCard: async id => {
        await cardsApi.deleteCard(id)
        const cards = get().cards
        set({cards:cards.filter(card => card.id !== id)})

    }
}))

export default useCardsStore