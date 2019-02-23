import React from 'react'

class ItemInputForm extends React.Component {

    constructor(props) {
        super(props)
        this.titleRef = React.createRef()
        this.descRef = React.createRef()
        this.priceRef = React.createRef()
        this.onFormSubmit = this.onFormSubmit.bind(this)

    }

    onFormSubmit(event) {
        event.preventDefault();
        const title = this.titleRef.current.value
        const desc = this.descRef.current.value
        const price = +this.priceRef.current.value

        if(
            title.trim().length === 0 || 
            price <=0 ||
            desc.trim().length === 0
        ) {
            return
        }
        const item = {title,desc,price};
        this.props.handleAdd(item)
    }
    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
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
        )
    }
}
export default ItemInputForm;