import React from 'react'

const singleItem = props => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.price}</h6>
            <p className="card-text">{props.desc}</p>
            <a className="card-link">Updated</a>
        </div>
    </div>
)
export default singleItem;