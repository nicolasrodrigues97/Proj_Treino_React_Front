import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Book from './pages/Book';

export default function Routing(){
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={ <Login />} />
                <Route path="/book" element={ <Book />} />
            </Routes>
        </Router>
    )
}