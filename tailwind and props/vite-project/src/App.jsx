//import React from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Cards from "./components/cards.jsx";
function App() {
  const myArr = ["react", "tailwind", "next", "vite", "chakra"];
  const myObj = {
    username : "trishtan",
    age : 15
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Cards channel ='trishtan' arr={myArr} obj={myObj}/>
    </>
  );
}

export default App;
