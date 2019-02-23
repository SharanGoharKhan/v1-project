import gql from "graphql-tag";

// This mutation edits items recieves updated Item
export const EDIT_ITEM = gql`
mutation EditItem($itemInput: ItemInput!) {
    editItem(itemInput: $itemInput) {
      _id
      title
      description
      price
    }
  }
`;

// This mutation adds item recieves item to be added
export const ADD_ITEM = gql`
  mutation AddItem($itemInput: ItemInput!) {
    createItem(itemInput: $itemInput) {
      _id
      title
      description
      price
    }
  }
`;

// This query list all the items doesn't recieve any parameters
export const LIST_ITEMS = gql`
{
  items {
    _id
    title
    description
    price
  }
}
`