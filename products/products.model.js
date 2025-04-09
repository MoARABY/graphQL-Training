


const products = [
        {
            id:'123',
            description:'item one',
            price: 22
        },
        {
            id:'122',
            description:'item two',
            price: 40
        }
]

const getAllProducts = () => {
    return products
}
const getProductById = (id) =>{
    return products.find(product =>(product.id === id))
}
const getProductsByPrice = (min,max) => {
    return products.filter(product => product.price >= min && product.price <= max)
}
const addNewProduct = (id,description,price) => {
    const newProduct = {
        id,
        description,
        price
    }
    products.push(newProduct)
    return newProduct

}
const addNewProductReview = (productId,id,rating,comment) => {
    const product = products.find(product => product.id === productId)
    if(!product.reviews){
        product.reviews = []
    }
    const newReview = {
        id,
        rating,
        comment
    }
    product.reviews.push(newReview)
    return newReview
}

module.exports = {getAllProducts,getProductsByPrice,getProductById,addNewProduct,addNewProductReview}