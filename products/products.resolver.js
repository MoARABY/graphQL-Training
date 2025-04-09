const ProductModel= require('./products.model')


module.exports = {
    Query :{
        products: () => {
            return  ProductModel.getAllProducts()
        }
    }
}