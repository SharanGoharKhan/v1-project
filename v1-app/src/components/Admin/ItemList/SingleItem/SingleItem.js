import React from 'react'
import { Mutation } from "react-apollo";
import {EDIT_ITEM} from "../../../../apollo/resolver"
import { validateInput } from '../../../../utilities/validateInput'


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
    // This function validates all the fields
    validate() {
        const _id = this.state.id
        const title = this.state.title
        const description = this.state.description
        const price = +this.state.price
        return { _id, ...validateInput(title,description,price) };
    }

    render() {
        return (
            <Mutation mutation={EDIT_ITEM} key={this.state.id}>
                {(editItem, { loading, error }) => (
                    <div className="card" >
                        <div className="card-body">
                            <form onSubmit={e => {
                                e.preventDefault();
                                let item = this.validate()
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
                            {loading && <p>Loading...</p>}
                            {error && <p>Error :( Please try again</p>}
                        </div>
                    </div>
                )}
            </Mutation>
        )
    }

}
export default SingleItem;