import React from "react"
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const Items = () => (
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
                <div key={_id} className="item-container">
                    <div className="text-container">
                        <h4>{title}</h4>
                        <p>{description}</p>
                        <h3>{price}</h3>
                    </div>
                </div>
            ));
        }}
    </Query>
);

