import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../containers/Home'
import NavBar from '../components/landing/NavBar'
import Footer from '../components/landing/Footer'

import FirstSectionLanding from '../containers/landing/FirstSectionLanding'
import SecondSectionLanding from '../containers/landing/SecondSectionLanding'
import ThirdSectionLanding from '../containers/landing/ThirdSectionLanding'
import PageLoaderLanding from '../containers/landing/PageLoaderLanding'


class Routing extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <FirstSectionLanding />
                    <SecondSectionLanding />
                    <ThirdSectionLanding />
                    <PageLoaderLanding />
                    
                    <Route path="/">
                        <div>
                            <Route exact path="/" component={Home} />                            
                        </div>
                    </Route>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default Routing