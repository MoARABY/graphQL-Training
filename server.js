const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {buildSchema} = require('graphql')



const schema = buildSchema(`
    type Query {
        products:[Products]
        orders:[Orders]
    }
    type Products {
        id:ID
        description:String
        price:Float
        reviews:[Reviews]
    }
    type Orders {
        id:ID
        date:String
        subTotal:Float
        items:[OrderItems]
    }
    type OrderItems {
        id:ID
        product:Products
        quantity:Float
    }
    type Reviews {
        id:ID
        rating:Int
        comment:String
    }
`
)


// مصدر الداتا
const root = {
    products : [
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
    ],
    orders:[
        {
            id:'111',
            date:'20-2-2025',
            subTotal:40,
            items:[
                {
                    product : {
                        id:'123',
                        description:'newww'
                    },
                    quantity:4
                },
                {
                    product : {
                        id:'122',
                        description:'oldddd'
                    },
                    quantity:3
                }
            ]
        }
    ]
}

const app = express()

// ميدلوير خاص بالجراف عشان يشتغل علي الhttp
app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))

app.listen(3000,()=>{
    console.log('server run at port 3000')
})