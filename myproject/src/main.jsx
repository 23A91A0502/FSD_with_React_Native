import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Headingapp from './heading.jsx'
// import Card from './visitingcard.jsx'
// import FunctionComponent from './FunctionComponent.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <FunctionComponent/> */}
    {/* <Headingapp /> */}
    {/* <Card/> */}
    
  </StrictMode>,
)
