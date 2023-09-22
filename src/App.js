import React from 'react';
import HomePage from './Pages/HomePage.js';
import './style.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.js';
import CoinPage from './Pages/CoinPage.js';
import ComparePage from './Pages/ComparePage.js';

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/dashboard' element={<Dashboard/>}></Route>
                <Route path='/coin/:id' element={<CoinPage />}></Route>
                <Route path='/compare' element={<ComparePage/>}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;