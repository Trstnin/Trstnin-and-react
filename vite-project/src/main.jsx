import React from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'


// function MyApp(){
//   return (
//     <div>
//       <h1>Hello les change it</h1>
//     </div>
//   )
// }

const reactElemant = React.createElement(
  'a' ,
{href : 'https://www.google.com', target : '_blank'} ,
  'click me to visit google.com'
)

createRoot(document.getElementById('root')).render(
  
  reactElemant
 
)
