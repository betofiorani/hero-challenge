import React from 'react'
import Header from './../components/Layouts/Header'
import Footer from './../components/Layouts/Footer'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'

const PageContainer = ({children, clases}) => {
    return (
        <Container className={clases}>
            <Header />
                {children}
            <Footer autor="Alberto Miguel Fiorani" />    
        </Container>
    )
}

PageContainer.propTypes = {
    clases: PropTypes.string,
}

export default PageContainer
