const ProductModel= require('./products.model')


module.exports = {
    Query :{
        products: () => {
            return  ProductModel.getAllProducts()
        },
        productsByPrice: (parent,args) => {
            return ProductModel.getProductsByPrice(args.min,args.max)
        },
        productById : (_,args) =>{
            return ProductModel.getProductById(args.id)
        }
    }
}