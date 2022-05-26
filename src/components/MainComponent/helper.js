import {getCards,deleteCard,filterCard, getAllCategories,postProducts} from '../../Services/cardsData'

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

export const filterCardData = async (category) => {
    try{
        const cards = await filterCard(category);
        return cards
    }
    catch(err){
        
    }
}
export const allCategories = async () => {
    try{
        const cards = await getAllCategories();
        return cards
    }
    catch(err){
        
    }
}

export const postNewProducts = async (data) => {
    try{
        const products = await postProducts(data);
        return products
    }catch(err){

    }
}