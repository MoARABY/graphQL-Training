const express = require('express')
const path = require('path')
const { graphqlHTTP } = require('express-graphql')
const {makeExecutableSchema} = require('@graphql-tools/schema')
const {loadFilesSync} = require('@graphql-tools/load-files')





const typesArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolversArray = loadFilesSync(path.join(__dirname,'**/*.resolver.js'))

const schema = makeExecutableSchema({
    typeDefs:typesArray,
    resolvers : resolversArray
})


// مصدر الداتا
// const root = {
//     products:require('./products/products.model'),
//     orders:require('./orders/orders.model')
// }

const app = express()

// ميدلوير خاص بالجراف عشان يشتغل علي الhttp
app.use('/graphql',graphqlHTTP({
    schema:schema,
    // rootValue:root,
    graphiql:true
}))

app.listen(3000,()=>{
    console.log('server run at port 3000')
})