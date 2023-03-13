import React from 'react'
import { Add } from './Add'
import ExpenseForm from './ExpenseForm'
import  './NewExpense.css'

const NewExpense = (props) => {
  
  const saveExpenseData =(enteredExpenseData)=>{
    const expenseData ={
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }
  return (
    <>
    <Add onsaveExpenseData={saveExpenseData}/>
    <div className='new-expense'>
<ExpenseForm  onSaveExpenseData={saveExpenseData}/>
    </div>
    </>
  )
}

export default NewExpense