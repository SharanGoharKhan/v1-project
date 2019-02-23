import React from 'react'
import SingleItem from './SingleItem/SingleItem'

const itemList = props => {
    const items = props.items.map(item => {
        return (
            <SingleItem
            title={item.title}
            desc={item.desc}
            price={item.price}
            />
        )
    })
    return <div>{items}</div>
}
export default itemList;