import React from 'react'
import SingleItem from './SingleItem/SingleItem'

const itemList = props => {
    const items = props.items.map(item => {
        return (
            <div className="marginTopBot">
                <SingleItem
                title={item.title}
                desc={item.desc}
                price={item.price}
                />
            </div>
        )
    })
    return <div>{items}</div>
}
export default itemList;