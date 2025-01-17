import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);   //counter is a variable & setCounter is a function and setCounter is responsible to update the counter variable 
 
  //let counter = 15;

  const addValue = () => {
    // counter = counter + 1;
    setCounter(counter + 1);                    
    console.log("Clicked", counter);           // Interview - UI updation handled by react
  }

  // const addValue = () => {
  //   // counter = counter + 1;
  //   setCounter(prevCounter => prevCounter + 1);          // setCounter() - In setCounter we find a call back function               
  //   setCounter(prevCounter => prevCounter + 1);                   
  //   setCounter(prevCounter => prevCounter + 1);                   
  //   setCounter(prevCounter => prevCounter + 1);                    // useState - it send updates into a UI/Variables in a batch format
  //                                               // Interview - UI updation handled by react
  // }

  const removeValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>It's Godzilla Time</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Add Value: {counter}</button>

      <br />

      <button
      onClick={removeValue}
      >Remove Value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
