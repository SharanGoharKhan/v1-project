import React from "react"
import "./styles.css"

import {Items} from "./items"


class Customer extends React.Component {
    render() {
        const items=Items()
        return (
            <div className='container--customer'>
                <div className='content'>
                    <header className="header--customer">
                        <h1>Customer Interface</h1>
                    </header>
                    <main>
                        {items}
                    </main>
                </div>
            </div>
        )
    }
}

export default Customer;