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
    },
    Mutation :{
        addNewProduct : (_,args) => {
            return ProductModel.addNewProduct(args.id,args.description,args.price)
        },
        addNewProductReview : (_,args) => {
            return ProductModel.addNewProductReview(args.productId,args.id,args.rating,args.comment)
        }
    }
}