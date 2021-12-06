import React from 'react'
import WelcomeScreen from './../components/Layouts/WelcomeScreen'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const WelcomePage = () => {
    return (
        <WelcomeScreen clases="fullHeight flex flex-center">
            <Container>
                <div> 
                    <h1 className="welcome-title text-center text-uppercase">Hero Challenge</h1>    
                </div>  
                <div className ="flex flex-center">
                    <Link className="link-btn" to="/login">
                        Ingresar
                    </Link>
                </div>
            </Container>
        </WelcomeScreen>
    )
}

export default WelcomePage

