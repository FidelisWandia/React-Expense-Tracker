import React, {useState} from 'react'
import './Form.css'

function Form(props){
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleHandler = (e)=>{
        setEnteredTitle(e.target.value)
    }
    
    const amountHandler = (e)=>{
        setEnteredAmount(e.target.value)
    }
    
    const dateHandler = (e)=>{
        console.log(e)
        setEnteredDate(e.target.value)
    }
    
    const submitHandler = (e)=>{
        e.preventDefault()
        const expenseObj = {
        title:enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    props.getData(expenseObj)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }
    return (
        <form onSubmit={submitHandler}>
        <div className="input-elements-div">
            <div className="input-div">
            <input type="text" value={enteredTitle} placeholder="Name of Expense" onChange={titleHandler} />
            <input type="number" value={enteredAmount} placeholder="Amount" onChange={amountHandler} min="1" />
            <input type="date" value={enteredDate} placeholder="Date" onChange={dateHandler} min="2015-01-01" max="2022-12-12" />
            </div>
            <button type="submit">Add Expense</button>
        </div>
        </form>
    )
}





export default Form