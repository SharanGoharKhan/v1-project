const { buildSchema } = require('graphql');
// allows us to define the schema and setup the schema that follows
// the official graphql specification

//define Types, input(parameters), query and mutations
// RootQuery for all query 
// Root Mutation for mutations
// then Pass it to the query and mutation in Schema fields


module.exports = buildSchema(`

type Item {
  _id: ID!
  title: String!
  description: String!
  price: Float!
}

input ItemInput {
  _id:String
  title: String!
  description: String!
  price: Float!
}

type RootQuery {
  item(itemId: ID!):Item!
  items: [Item!]!
}

type RootMutation {
    createItem(itemInput: ItemInput): Item
    editItem(itemInput: ItemInput): Item!
    deleteItem(itemId: ID!): Item!
}

schema {
    query: RootQuery
    mutation: RootMutation
}
`);
