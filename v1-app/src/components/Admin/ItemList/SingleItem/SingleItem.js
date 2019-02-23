import React from 'react'


class SingleItem extends React.Component {

    state = {
        title: this.props.title,
        desc: this.props.desc,
        price: this.props.price

    }
    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this)
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
    onFormSubmit(event) {
        event.preventDefault();
        const title = this.state.title
        const desc = this.state.desc
        const price = +this.state.price

        if (
            title.trim().length === 0 ||
            price <= 0 ||
            desc.trim().length === 0
        ) {
            return
        }
        const item = { title, desc, price };
        console.log(item)
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <form onSubmit={this.onFormSubmit}>
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
                            value={this.state.desc}
                            name="desc"
                            onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="itemDescription">Item Price</label>
                            <input type="number" step="0.0001" 
                            className="form-control"
                            name="price" 
                            value={this.state.price} 
                            onChange={this.handleChange}/>
                        </div>
                        <button className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        )
    }

}
export default SingleItem;