import supabase from "./client";


export const cardsApi = {
    getCards: async () => {
        let {data: cards, error} = await supabase
            .from('cards')
            .select('*')
        return cards
    },
    selectCard: async (id,select) => {
        const { error } = await supabase
            .from('cards')
            .update({ select })
            .eq('id', id)
    },
    deleteCard: async id => {
        const { data, error } = await supabase
            .from('cards')
            .delete()
            .eq('id', id)

    }
}