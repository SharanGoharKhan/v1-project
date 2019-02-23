import React from 'react'

const singleItem = props => (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.desc}</h2>
        <h3>{props.price}</h3>
    </div>
)
export default singleItem;