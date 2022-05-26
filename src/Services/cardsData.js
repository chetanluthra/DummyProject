import axios from 'axios'


export const getCards = async () => {
    try {
        const response = await axios.get('http://localhost:3000/products')
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}

export const deleteCard = async (productId) => {
    try {
        const response = await axios.delete(`http://localhost:3000/products/${productId}`)
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}
export const filterCard = async (category) => {
    try {
        const response = await axios.get(`http://localhost:3000/products?category=${category}`)
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}

export const getAllCategories = async () => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/categories`)
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}

export const postProducts = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/products',data)
        return response
    } catch (err) {
        return {
        error: err && err.error ? err.error.error.name : "Something went wrong!",
        }
    }
}
