import React, {useState} from 'react'
import Form from './Form'
import ExpensesList from './ExpensesList'
import './App.css'

function App() {   
  const [userData, setUserData] = useState([])
  const receivedData = (expenses)=>{
    setUserData(prev=>([expenses,...prev]))
    console.log(expenses)
  }
  return (
    <section>
      <h1>Budget Tracker App</h1>
      <Form getData={receivedData} />
      <ExpensesList items={userData} />
    </section>
  );
}

export default App;
