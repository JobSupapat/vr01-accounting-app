import React, { useContext } from 'react'
import DataContext from '../data/DataContext'

export default function Report() {
    const {income, expense} = useContext(DataContext)
  return (
    <div className='pt-2'>
      <h3>Accounting Report :</h3>
      <div className='w-75 mx-auto bg-white rounded-2 p-2'>
        <h6>ยอดคงเหลือ (฿)</h6>
        <h1>{income - expense}</h1>
        <div className='report-container'>
            <div>
                <h6>รายรับทั้งหมด (฿)</h6>
                <p className='report plus'>{income}</p>
            </div>
            <div>
                <h6>รายรับจ่ายทั้งหมด (฿)</h6>
                <p className='report minus'>{expense}</p>
            </div>
        </div>
      </div>
    </div>
  )
}
