import React from 'react'
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const EDIT_ITEM = gql`
mutation EditItem($itemInput: ItemInput!) {
    editItem(itemInput: $itemInput) {
      _id
      title
      description
      price
    }
  }
`;

class SingleItem extends React.Component {

    state = {
        id: this.props.id,
        title: this.props.title,
        description: this.props.description,
        price: this.props.price

    }
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const field_name = event.target.name;
        const field_value = event.target.value;
        const obj = {
            [field_name]: field_value
        }
        this.setState(
            obj
        )
    }
    validate() {
        const _id = this.state.id
        const title = this.state.title
        const description = this.state.description
        const price = +this.state.price

        if (
            title.trim().length === 0 ||
            price <= 0 ||
            description.trim().length === 0
        ) {
            return false
        }
        return { _id, title, description, price };

    }

    render() {
        return (
            <Mutation mutation={EDIT_ITEM} key={this.state.id}>
                {editItem => (
                    <div className="card" >
                        <div className="card-body">
                            <form onSubmit={e => {
                                e.preventDefault();
                                let item = this.validate()
                                console.log(item)
                                if (item)
                                    editItem({ variables: { itemInput: item } })
                                        .then(data => {
                                            //show successmessage here
                                        })
                                        .catch(err => {//show error mesage here
                                        });
                            }}>
                                <div className="form-group">
                                    <label htmlFor="itemTitle">Item Title</label>
                                    <input className="form-control"
                                        value={this.state.title}
                                        name="title"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemDescription">Item Description</label>
                                    <input className="form-control"
                                        value={this.state.description}
                                        name="description"
                                        onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="itemDescription">Item Price</label>
                                    <input type="number" step="0.0001"
                                        className="form-control"
                                        name="price"
                                        value={this.state.price}
                                        onChange={this.handleChange} />
                                </div>
                                <button className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                )}
            </Mutation>
        )
    }

}
export default SingleItem;