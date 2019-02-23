import React from "react"
import { ItemList } from "../../components/Customer/ItemList/ItemList"
import './Customer.css'
import Header from '../../UI/Header/Header'

class Customer extends React.Component {
    render() {
        const items = ItemList()
        return (
            <div className='container--customer'>
                <div className='content'>
                    <Header title='Customer Interface' />
                    <main>
                        {items}
                    </main>
                </div>
            </div>
        )
    }
}

export default Customer;