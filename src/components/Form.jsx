import React, { useEffect, useState } from 'react'

export default function Form({items, setItems}) {
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputTitle = (event)=>{
        setTitle(event.target.value)
    }
    const inputAmount = (event)=>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{
        event.preventDefault()
        const itemData = {
            title:title,
            amount:Number(amount)
        }
        setItems([itemData, ...items])
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkValid = title.trim().length>0 && amount !== 0
        setFormValid(checkValid)
    },[title, amount])

  return (
    <div className='my-2'>
      <h3>Accounting Form :</h3>
      <form className='w-75 mx-auto' onSubmit={saveItem}>
        <div className='fs-6 mb-3'>
            <label className='form-label'>ชื่อรายการ :</label>
            <input type="text" placeholder='ระบุชื่อรายการ' className='form-control' onChange={inputTitle} value={title}/>
        </div>
        <div className='fs-6 mb-3'>
            <label className='form-label'>จำนวนเงิน :</label>
            <input type="number" placeholder='(-รายจ่าย / +รายรับ)' className='form-control' onChange={inputAmount} value={amount}/>
        </div>
        <div className='text-center'>
            <button type='submit' className='btn btn-info w-100 fs-5 rounded-5' disabled={!formValid}>เพิ่มรายการ</button>
        </div>
      </form>
    </div>
  )
}
