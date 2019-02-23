import React from "react"
import { Items } from "../../components/Customer/ItemList/Items"
import './Customer.css'
import Header from '../../UI/Header/Header'

class Customer extends React.Component {
    render() {
        const items = Items()
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