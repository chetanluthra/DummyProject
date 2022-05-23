import {getCards,deleteCard} from '../../Services/cardsData'

export const getCardsData = async () => {
    try{
        const cards = await getCards();
        return cards
    }
    catch(err){

    }
}
export const deleteCardData = async (id) => {
    try{
        const cards = await deleteCard(id);
        return cards
    }
    catch(err){
        
    }
}