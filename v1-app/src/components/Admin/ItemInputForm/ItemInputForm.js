import React from 'react'
import { Mutation } from "react-apollo";
import { ADD_ITEM,LIST_ITEMS } from "../../../apollo/resolver"
import { validateInput } from '../../../utilities/validateInput'


class ItemInputForm extends React.Component {

    constructor(props) {
        super(props)
        this.titleRef = React.createRef()
        this.descRef = React.createRef()
        this.priceRef = React.createRef()

    }

    // This function checks if the input is valid
    validate() {
        const title = this.titleRef.current.value
        const description = this.descRef.current.value
        const price = +this.priceRef.current.value
        return validateInput(title,description,price)
    }
    render() {
        return (
            // Mutation is called for adding item adds 
            // the item in the current list of items 
            <Mutation
                mutation={ADD_ITEM}
                update={(cache, { data: { createItem } }) => {
                    const { items } = cache.readQuery({ query: LIST_ITEMS });
                    cache.writeQuery({
                        query: LIST_ITEMS,
                        data: { items: items.concat([createItem]) },
                    });
                }}>
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
                                        //if the data is recieved set the 
                                        //input elements values to empty
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