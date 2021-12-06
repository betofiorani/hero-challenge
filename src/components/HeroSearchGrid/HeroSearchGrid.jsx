import React from 'react'
import PropTypes from 'prop-types'
import { Container,Row } from 'react-bootstrap'
import HeroCard from '../HeroCard'

const HeroSearchGrid = ({heroSearchResults, teamAlignment, heroCardAddClickHandler}) => {
    
    let isAvailable = (heroAlignment) => {
        if(heroAlignment >=3){
            
            return false
        } else {
            return true
        }  
    }

    const renderHeroSearch = (hero, index) => {
        // validar la alineación
        return (
            <HeroCard 
                origin="search" 
                key={hero.id} 
                hero={hero} 
                heroCardId={index} 
                heroCardAddClickHandler={heroCardAddClickHandler}
                isAvailable={isAvailable(teamAlignment[hero.biography.alignment])}
                columnGrid={{xs:12, lg:3, sm:6, md:4}}/>
        )
    }
    
    return (
        <Container className="hero-search-grid">
            <Row>
                {heroSearchResults && heroSearchResults.map((hero,index) => renderHeroSearch(hero,index))}    
            </Row>
        </Container>
    )
}

HeroSearchGrid.propTypes = {
    heroCardAddClickHandler: PropTypes.func.isRequired,
    heroSearchResults: PropTypes.array.isRequired,
    teamAlignment: PropTypes.object.isRequired,
}

export default HeroSearchGrid
