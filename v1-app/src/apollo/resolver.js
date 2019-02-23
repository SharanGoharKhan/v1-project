import gql from "graphql-tag";

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