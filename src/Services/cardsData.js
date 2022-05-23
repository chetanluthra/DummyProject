import axios from 'axios'


export const getCards = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}

export const deleteCard = async (productId) => {
    try {
        const response = await axios.delete(`https://fakestoreapi.com/products/${productId}`)
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}