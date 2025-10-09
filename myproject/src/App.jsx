import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Page1 from './Page1';
import ViewData from './ViewData';
function App() {

  const [AllData,setAllData] = useState([]);

  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 AllData={AllData} setAllData={setAllData}/>}/>
        <Route path="/view" element={<ViewData AllData={AllData}/>} />
      </Routes>
      </BrowserRouter>
    </>
  )


}

export default App
