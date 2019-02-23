import React from 'react'
import './Customer.css'
import Header from '../../UI/Header/Header'

class Customer extends React.Component {
    render() {
        return (
            <div className='container--customer'>
                <div className='content'>
                    <Header title='Customer Interface' />
                    <main>
                        <div className="item-container">
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Description</p>
                                <h6>Price</h6>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="text-container">
                                <div className="price-container">

                                </div>
                                <h4>Title</h4>
                                <p>Description</p>
                                <h6>Price</h6>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Customer;