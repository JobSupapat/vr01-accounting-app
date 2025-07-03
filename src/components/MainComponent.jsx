import React, { useState } from 'react'
import Transaction from './Transaction'
import Form from './Form'

export default function MainComponent() {
    const initData = [
        { title: "Salary", amount: 150000 },
        { title: "ค่าผ่อนบ้าน", amount: -15000 },
        { title: "ค่าผ่อนรถ", amount: -5000 },
    ]
    const [items, setItems] = useState(initData)
    return (
        <div>
            <div className='container-md p-0'>
                <Form items={items} setItems={setItems}/>
                <Transaction items={items} />
            </div>
        </div>
    )
}
