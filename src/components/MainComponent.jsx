import React, { useEffect, useState } from 'react'
import Transaction from './Transaction'
import Form from './Form'
import DataContext from '../data/DataContext'
import Report from './Report'

export default function MainComponent() {
    const initData = [
        { title: "Salary", amount: 150000 },
        { title: "ค่าผ่อนบ้าน", amount: -15000 },
        { title: "ค่าผ่อนรถ", amount: -5000 },
    ]
    const [items, setItems] = useState(initData)
    const [reportIncome, setReportIncome] = useState(0)
    const [reportExpense, setReportExpense] = useState(0)

    useEffect(()=>{
        const amounts = items.map(item=>item.amount)
        const income = amounts.filter(e=>e>0).reduce((sum, element)=>sum += element)
        const expense = (amounts.filter(e=>e<0).reduce((sum, element)=>sum += element))*-1
        setReportIncome(income)
        setReportExpense(expense)
    }, [items])

    return (
        <DataContext.Provider value={
            {
                income:reportIncome,
                expense:reportExpense
            }
        }>
            <div>
                <div className='container-md p-0'>
                    <Report/>
                    <Form items={items} setItems={setItems} />
                    <Transaction items={items} />
                </div>
            </div>
        </DataContext.Provider>
    )
}
