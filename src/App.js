import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components'


const App = () => {
  return (
    <div className="bg-purple-400">
        <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<HomePage/>} />
    
                   
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;