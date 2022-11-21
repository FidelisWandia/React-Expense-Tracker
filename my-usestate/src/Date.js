import React from 'react'
import './Date.css'

function Date(props){
    const day = props.dateEntered.toLocaleString('en-US', {day:"2-digit"})
    const month = props.dateEntered.toLocaleString('en-US', {month:'short'})
    const year = props.dateEntered.getFullYear()
    return(
        <div className="date-container">
        <div>{day}</div>
        <div>{month}</div>
        <div>{year}</div>
        </div>
    )
}







export default Date