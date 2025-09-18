import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Cards from './Cards'
function App() {
  const [x , setx] = useState(1);
  const Change = () => {
      if(x==true){
        setx(false);
      }
      else{
        setx(true);
      }
  }

  return (
    <>
      {x==true ? <h1>Hello</h1> : <h1>Bye</h1>}
      <button onClick={Change}>Change State</button>
    </>
  )
}

export default App
