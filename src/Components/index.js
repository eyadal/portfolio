import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'


function index() {
    return (
        <Router>
            <Header />
            <Main />
            <Footer />
        </Router>
    )
}

export default index
