


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

module.exports = {getAllProducts,getProductsByPrice,getProductById}