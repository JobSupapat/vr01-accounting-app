import React from 'react'

export default function Item({ title, amount }) {
    const status = amount < 0 ? "expense" : "income"
    return (
        <div className={status}>
            <div className='bg-white border border-dark rounded-2 py-2 w-100 mb-3'>
                <li className='fs-6 d-flex d-row justify-content-between px-1'>
                    {title} <span>{amount}</span>
                </li>
            </div>
        </div>
    )
}
