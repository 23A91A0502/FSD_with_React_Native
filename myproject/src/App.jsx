import React, { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Cards from './Cards'
function App() {
  const [X,setX]=useState(0);
  const [y,sety]=useState(0);
  useEffect(()=>{
      console.log('Executed');
  },[X]);
  return (
    <>
    <div className="form-body">
      <form>
        <div>
          <label>Firstname: </label>
          <input type='text' />
        </div>
        <div>
          <label>Lastname: </label>
          <input type='text' />
        </div>
        <div>
          <label>Email: </label>
          <input type='email'/>
        </div>
      </form>
      <button onClick={()=>setX(X+1)}>Add Data</button>{X}
      <button onClick={()=>sety(y+1)}>add data</button>
      </div>
    </>
  )
}

export default App
