import React from 'react'
import './Input.css'

function Input(){
    const titleHandler = ()=>{
        console.log("Title changed")
    }
    const amountHandler = ()=>{
        console.log("AMount changed")
    }
    const dateHandler = ()=>{
        console.log("date changed")
    }
    return (
        <div className="input-elements-div">
            <input type="text" placeholder="Name of Expense" onChange={titleHandler} />
            <input type="number" placeholder="Amount" onChange={amountHandler} min="0.01" />
            <input type="date" placeholder="Date" onChange={dateHandler} min="2015-01-01" max="2022-12-12" />
        </div>
    )
}





export default Input