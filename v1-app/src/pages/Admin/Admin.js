import React from 'react'
import Header from '../../UI/Header/Header'
import ItemInputForm from '../../components/Admin/ItemInputForm/ItemInputForm'

class Admin extends React.Component {

    state = {
        items: []
    }
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd(item) {
        this.setState(prevState => {
            const updatedItems = [...prevState.items]
            updatedItems.push({
                title: item.title,
                desc: item.desc,
                price: item.price
            })
            return {items: updatedItems}
        })
        console.log('Submit clicked',this.state.items)
    }
    render() {
        return (
            <div className='container--customer'>
                <div className='content'>
                    <Header title='Admin Interface' />
                    <main>
                        <ItemInputForm handleAdd={this.handleAdd} />
                    </main>
                </div>
            </div>
        )
    }
}

export default Admin;