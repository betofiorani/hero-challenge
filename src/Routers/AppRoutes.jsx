import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './../pages/WelcomePage';
import LoginPage from './../pages/LoginPage';
import ErrorPage from './../pages/ErrorPage';
import TeamPage from './../pages/TeamPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = props => {
    return (
        <Router>
            <Routes>
                <Route 
                    exact path="/"
                    element={<WelcomePage />} 
                />
                <Route 
                    path="/login"
                    element={<LoginPage />} 
                />
                <Route 
                    path="/team"
                    element={<PrivateRoute><TeamPage /></PrivateRoute>}
                />
                <Route 
                    path="*"
                    element={<ErrorPage />} 
                />
                {/* <Route path="/main">
                    <MainPage data= {data} actions= {actions} />
                </Route>
                <Route path="/city/:countryCode/:city">
                    <CityPage data= {data} actions= {actions}/>
                </Route>
                <Route>
                    <NotFoundPage />
                </Route> */}
            </Routes>
        </Router>
    )
}

export default AppRoutes
