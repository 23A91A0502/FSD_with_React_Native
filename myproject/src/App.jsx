import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './Name'
import Cards from './Cards'
function App() {
  const fun = () => {
    setData([...Data,userData]);
    userData={
       "firstname":"",
       "lastname":"",
       "email":""
    };
  };
  var userData = {
    "firstname":"",
    "lastname":"",
    "email":""
  };
  const [Data,setData] = useState([]);
  const getData = (key,event) => {
      userData[key]=event.target.value;
  };
  return (
    <>
    <div className="form-body">
      <form>
        <div>
          <label>Firstname: </label>
          <input type='text' onChange={(event)=>getData("firstname",event)}/>
        </div>
        <div>
          <label>Lastname: </label>
          <input type='text' onChange={(event)=>getData("lastname",event)}/>
        </div>
        <div>
          <label>Email: </label>
          <input type='email' onChange={(event)=>getData("email",event)}/>
        </div>
      </form>
      <button onClick={fun}>Add Data</button>
      </div>
      <div className="parent">
        {
        Data.map((ele,index)=>{
          return (
           <div className="child">
             <div>Firstname:{ele.firstname}</div>
             <div>Lastname:{ele.lastname}</div>
             <div>Email:{ele.email}</div>
           </div>
          );
        })
        }
      </div>
    </>
  )
}

export default App
