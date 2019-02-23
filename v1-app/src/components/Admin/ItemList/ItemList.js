import React from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";
import SingleItem from "./SingleItem/SingleItem";

export const ItemList = () => (
    <Query
        query={gql`
      {
        items {
          _id
          title
          description
          price
        }
      }
    `}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.items.map(({ _id, title, description, price }) => (
                <div className="marginTopBot" key={_id}>
                    <SingleItem
                        id={_id}
                        title={title}
                        description={description}
                        price={price}
                    />
                </div>
            ));
        }}
    </Query>
);


export default ItemList;

