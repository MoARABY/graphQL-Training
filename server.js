const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const {buildSchema} = require('graphql')



const schema = buildSchema(`
type Query {
    description:String
    price:Float
}`
)


// مصدر الداتا
const root = {
    description:'red shoes',
    price:22.13
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