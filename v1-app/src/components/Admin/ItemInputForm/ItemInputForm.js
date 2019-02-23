import React from 'react'
import gql from "graphql-tag";
import { Mutation } from "react-apollo";


const ADD_ITEM = gql`
  mutation AddItem($itemInput: ItemInput!) {
    createItem(itemInput: $itemInput) {
      _id
      title
      description
      price
    }
  }
`;

class ItemInputForm extends React.Component {

    constructor(props) {
        super(props)
        this.titleRef = React.createRef()
        this.descRef = React.createRef()
        this.priceRef = React.createRef()

    }

    validate() {
        const title = this.titleRef.current.value
        const description = this.descRef.current.value
        const price = +this.priceRef.current.value

        if (
            title.trim().length === 0 ||
            price <= 0 ||
            description.trim().length === 0
        ) {
            return false
        }
        return { title, description, price };

    }
    render() {
        return (
            <Mutation
                mutation={ADD_ITEM}>
                {(createItem, { data }) => (
                    <div>
                        <form onSubmit={e => {
                            e.preventDefault();
                            let item = this.validate()
                            if (item)
                                createItem({
                                    variables: {
                                        itemInput: item
                                    }
                                })
                                    .then(data => {
                                        this.props.handleAdd(data.data.createItem)
                                        this.titleRef.current.value = "";
                                        this.descRef.current.value = "";
                                        this.priceRef.current.value = "";
                                    }).catch(err => {
                                        console.log(err)
                                    });

                        }}>
                            <div className="form-group">
                                <label htmlFor="itemTitle">Item Title</label>
                                <input className="form-control" placeholder="Item title" ref={this.titleRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemDescription">Item Description</label>
                                <input className="form-control" placeholder="Item description" ref={this.descRef} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="itemDescription">Item Price</label>
                                <input type="number" step="0.0001" className="form-control" placeholder="Item price" ref={this.priceRef} />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Item</button>
                        </form>

                    </div>
                )}
            </Mutation>

        )
    }
}
export default ItemInputForm;