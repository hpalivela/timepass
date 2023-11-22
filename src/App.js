import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FetchAll from './FetchAll';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from './Single';
// import Login from './Login';
// import Calculator from './Calculator';
const App = () => {
  return (
    <div>
      {/* <Calculator/> */}
      {/* <Login/> */}
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<FetchAll/>}></Route>
        <Route exact path="/singlePost/:id" element={<Single/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
