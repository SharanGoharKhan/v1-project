const { buildSchema } = require('graphql');

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
