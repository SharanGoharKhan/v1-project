import React from "react"
import { Query } from "react-apollo";
import SingleItem from "./SingleItem/SingleItem";

import {LIST_ITEMS} from "../../../apollo/resolver"

export const ItemList = () => (
    <Query
        query={LIST_ITEMS}
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

