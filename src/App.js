import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Navbar} from './components'


const App = () => {
  return (

    <div className="bg-purple-400">

        <BrowserRouter>
        <Navbar/>
            <Routes>
                    <Route exact path="/" element={<HomePage/>} />
    
                   
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;