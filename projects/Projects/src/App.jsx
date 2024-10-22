import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

//creating function for making counter

function App() {
  //using useState 
  let [counter , setCounter] = useState(10);

  //creating function for increase value of counter
  const valIncrease = () => {
    setCounter(counter + 1);
    if(counter >= 20){
      alert("we cannt go above  20");
      setCounter(20)
    }
  }

  //creating function for decrease value of counter
  const valDecrease = () => {
    setCounter(counter - 1);
    if(counter <= 0){
      alert("we cannt go below  0");
      setCounter(0)
    }
  }

  //creating function for reset value of counter
  const valReset = () => {
    setCounter(0)
  }
  return (
  <div>
      <h1>Counter : {counter}</h1>
      <button onClick={valIncrease}>Increase {counter}</button>
      <button onClick={valReset}>Reset {counter}</button>
      <button onClick={valDecrease}>Decrease {counter}</button>

  </div>)
}

export default App;

