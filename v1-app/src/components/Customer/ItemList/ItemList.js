import React from "react"
import { Query } from "react-apollo";
import { LIST_ITEMS } from "../../../apollo/resolver"

export const ItemList = () => (
    <Query
        query={LIST_ITEMS}
    >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.items.map(({ _id, title, description, price }) => (
                <div key={_id} className="card marginTopBot">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            ));
        }}
    </Query>
);

