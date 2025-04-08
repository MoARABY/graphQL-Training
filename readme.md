# GraphQL practical training

## Practical Application Of The GraphQL Course

### What is graphQL ?

- query language that we can use to query a server or mutate data, alternative to rest api, but without http methods or endPoints. written in query shape and have specific rules and tools

### Advantage over rest & restfull

- no under fetching >>> to request from multi collection in rest we send a different requests to server so that named "under fetching", but with graphQl we just send one req to server and get all data we want from different collections
- no over fetching >>> when we send requset to get data from server in rest it returns all data in collection then we can process them, but with graphQl we specify exactly fields that we need from collections so that prevent over fetching and server loading
- schemas and types >>> we use schema and types in graphQL to draw our requested data shape, ensure that we return our data with its correct datatypes. **we will talk deeply about it then**
- speeds up development >>> you dont need to create many and many endpoints and ware about each one of them, just one point to go

### Disadvantage comparing to rest & restfull

- complexity >>> graph working over http protocol "post request to '/graphql' endpoint" but also add another layer on top of it, so frontend dev needs to understand own graphQL queries. also you take additional time to setup graphQL environment
- **difficult to cache** >>> in restfull the biggest benefit is that the response is tends to be fix, if we send same req in short time it will return same response becouse it save response with expire time without having to fetch again from database, in graphQL we can apply cashing but it is more difficult than restfull. **we will talk deeply about it then**
- not majority of APIs >>> graphQL is not old and famous like rest apis so it have a smaller communities and support in diffirent tools and websites

## sessionOne

- we will talk about schemas,types and query and try working with them ...

### Schema

- as usuall define for schema, in graphQL it also used to predefine our query structure to specify our collection and data we want from server. **will talk about it later**

### Types

- define our collection structures before query
- type products {title:String!,price:Float!} >>> here we define type called products and have title field , **!** = means required

### query

- specify data that we want to request from server but from our schemas structure
- Query { products {title} orders {date,subTotal} }

lets try, will can use graphQL software called **graphiql** >>> https://graphql.org/swapi-graphql/

- query {film(filmID:1){ title,releaseDate,producers } person(personID:4){name,homeworld {name, population}}}

## sessionTwo

- let's talk about GraphQL implementations...
  we can implement GraphQL using any programming language, we will use JS in our session, it's alot of tools provided to work with GraphQL like ...

### A) graphQL.js

- JS reference implementation for GraphQL **will use this**

### B) relay

- can be used by frontend devs

### C) Apollo server

- most popular software to work with GraphQL
