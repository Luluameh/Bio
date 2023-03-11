import React,{ useState} from 'react'
import  './ExpenseForm.css'

const ExpenseForm = (props) => {
  const[enterdTittle,setEnteredTittle]=useState('')
  const[enterdAmount,setEnteredAmount]=useState('')
  const[enterdDate,setEnteredDate]=useState('')


  
  
  const titleChangeHandler =(event)=>{
    setEnteredTittle(event.target.value)

  }
  const amountChangeHandler =(event)=>{
    setEnteredAmount(event.target.value)

  }
  const dateChangeHandler =(event)=>{
    setEnteredDate(event.target.value)

  }
  const submitHandler =(event)=>{
    event.preventDefault();
     const expenseData = {
title : enterdTittle,
amount : +enterdAmount,
date : new Date(enterdDate)
    };
props.onSaveExpenseData(expenseData)
setEnteredAmount('');
setEnteredDate('');
setEnteredTittle('');
  };



  return (
    <div>
        <form  onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
<label >Title</label>
<input type='text' value={enterdTittle}  onChange={titleChangeHandler}/>
</div>
<div className='new-expense__control'>
<label >Amount</label>
<input type='number' min='0.01'step='0.01'value={enterdAmount}  onChange={amountChangeHandler}/>
</div>
<div className='new-expense__control'>
<label >Date</label>
<input type='date' min='2019-01-01'max='2023-12-31' value={enterdDate} onChange={dateChangeHandler}/>
</div>
</div>
<div className='new-expense__actions'>
<button type='submit'>Add Expense</button>
</div>
        </form>
    </div>
  )
}

export default ExpenseForm