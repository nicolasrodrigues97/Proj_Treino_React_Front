import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Book from './pages/Book';
import NewBook from './pages/NewBook';

export default function Routing(){
    return (
        <Router>
            <Routes>
                <Route path="/" exact element={ <Login />} />
                <Route path="/books" element={ <Book />} />
                <Route path="/book/new/:bookId" element={ <NewBook />} />
            </Routes>
        </Router>
    )
}