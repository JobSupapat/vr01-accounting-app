import React from 'react'
import Transaction from './Transaction'

export default function MainComponent() {
    const initData = [
        { title: "Salary", amount: 150000 },
        { title: "ค่าผ่อนบ้าน", amount: 15000 },
        { title: "ค่าผ่อนรถ", amount: 5000 },
    ]
    return (
        <div>
            <div className='container-md p-0'>
                <Transaction items={initData} />
            </div>
        </div>
    )
}
