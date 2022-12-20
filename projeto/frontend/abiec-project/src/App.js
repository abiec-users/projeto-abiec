import React from 'react'
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>


          
        </Routes>
      </BrowserRouter>
      

      
    </div>
  );
}

export default App;
