import React from 'react'
import './styles.css'

class Customer extends React.Component {
    render() {
        return (
            <div className='container--customer'>
                <div className='content'>
                    <header className="header--customer">
                        <h1>Customer Interface</h1>
                    </header>
                    <main>
                        <div className="item-container">
                            <div className="text-container">
                                <h4>Title</h4>
                                <p>Description</p>
                                <h3>Price</h3>
                            </div>
                        </div>
                        <div className="item-container">
                            <div className="text-container">
                                <div className="price-container">
                                
                                </div>
                                <h4>Title</h4>
                                <p>Description</p>
                                <h3>Price</h3>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default Customer;