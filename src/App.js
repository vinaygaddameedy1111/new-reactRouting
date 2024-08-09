import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HOME from './HOME'
import LOCATION from './LOCATION'

const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/home' element={<HOME/>}/>
              <Route path='/location' element={<LOCATION/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App