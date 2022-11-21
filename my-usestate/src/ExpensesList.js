import React from 'react'
import './ExpensesList.css'
import Date from './Date'
function ExpensesList(props){
    return (
        <ul>
            {props.items.map(item=>{
                return(
                    <div className="main">
                    <div className="container">
                    <Date dateEntered={item.date} />
                    <h1>{item.title}</h1>
                    <h1>${item.amount}</h1>
                    <h1 className="cancel">X</h1>
                    </div>
                    </div>
                )
            })}
        </ul>
    )
}

export default ExpensesList