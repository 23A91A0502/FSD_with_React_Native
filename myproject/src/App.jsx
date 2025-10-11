import React, { useEffect } from 'react'
import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import View from './View';
import Store from './Store';

function App() {
    const [AllData,setAllData] = useState([]);
  return (
    <>
    <Store.Provider value={{AllData,setAllData}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1/>}/>
        <Route path='/View' element={<View/>}/>
      </Routes>
      </BrowserRouter>
      </Store.Provider>
    </>
  )


}

export default App
