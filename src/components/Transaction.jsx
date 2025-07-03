import React from 'react'
import Item from './Item'

export default function Transaction({items}) {
    return (
        <div className='py-2'>
            <h3>Transaction Lists :</h3>
            <ul className='list-unstyled py-1 w-75 mx-auto'>
                {items.map((e, i)=>(
                    <Item {...e} key={i}/>
                ))}
            </ul>
        </div>
    )
}
