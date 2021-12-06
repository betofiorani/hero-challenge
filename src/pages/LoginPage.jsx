import React from 'react'
import WelcomeScreen from './../components/Layouts/WelcomeScreen'
import Login from '../components/Login'

const LoginPage = () => {
    return (
        <WelcomeScreen clases="fullHeight flex flex-center">
            <Login
                formClases="login-form" 
                formGroupClases="flex flex-column" 
                formLabelClases="align-self-start"
                formCheckClases="flex gap-10 align-center font-12"/>
        </WelcomeScreen>
    )
}

export default LoginPage

