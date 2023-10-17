import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Navbar, Checkout, SearchResult, ProductPage} from './components'


const App = () => {
  return (

    <div className="w-[100%]">
        
        <BrowserRouter>
        <Navbar/>
            <Routes>
                    <Route exact path="/" element={<HomePage/>} />
                    <Route  path="/search" element={<SearchResult/>} />
                    <Route  path="/product/:id" element={<ProductPage/>} />
                    <Route  path="/checkout" element={<Checkout/>} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;