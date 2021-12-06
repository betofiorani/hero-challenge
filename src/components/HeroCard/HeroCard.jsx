import React from 'react'
import PropTypes from 'prop-types'
import Card from 'react-bootstrap/Card'
import { CloseButton, Col } from 'react-bootstrap'
import HeroPowerStats from '../HeroPowerStats'
import heroImagen from '../../img/hero.png'
import HeroCardActions from '../HeroCardActions'
import HeroDetailsContainer from '../../Containers/HeroDetailsContainer';

const HeroCard = ({hero, heroCardId, onDeleteHandler, addHeroClickHandler, origin, showHeroDetails, heroCardDetailsClickHandler, heroCardDetailsOnHideHandler,isAvailable, heroCardAddClickHandler}) => {
    
    // Handle Hover
    const heroCardSetHover = () => {
    }
    const heroCardUnsetHover = () => { 
    }

    return (    
        <Col className="flex align-center margin-bottom-20 padding-10 justify-center">
            <Card key={heroCardId} className="hero-card" onMouseEnter={() => heroCardSetHover()} onMouseLeave={heroCardUnsetHover()}>
                {
                    origin === "team"
                    ? 
                    <CloseButton disabled={hero.status === "deleted"} id={`delete-${heroCardId}`} className="btn-close-custom" onClick={onDeleteHandler}/>
                    :
                    ""
                }
                <Card.Img className={!isAvailable ? "not-available" : ""} variant="top" src={hero.status === "deleted" ? heroImagen : hero.image.url} alt={hero.name} />
                <Card.Body>
                    <Card.Title>{hero.status === "deleted" ? "Disponible" : hero.name}</Card.Title>
                    <small className="text-muted">{hero.status === "deleted" ? "Alineación" : hero.biography.alignment}</small>
                </Card.Body>
                    <HeroPowerStats 
                        powerstats={hero.powerstats} 
                        heroEmpty={hero.status === "deleted"} 
                        heroCardId={heroCardId}
                        addHeroClickHandler={() => addHeroClickHandler(heroCardId)}/>
                <Card.Footer>
                {hero.status !== "deleted" ? 
                <HeroCardActions 
                    origin={origin}
                    hero={hero}
                    isAvailable={isAvailable}
                    heroCardId ={heroCardId} 
                    heroCardDetailsClickHandler={heroCardDetailsClickHandler} 
                    heroCardAddClickHandler={heroCardAddClickHandler}/>
                    : ""
                }
                {origin ==="team" ?
                <HeroDetailsContainer 
                    selectedHero={hero} 
                    heroCardId ={heroCardId} 
                    showHeroDetails={showHeroDetails} 
                    heroCardDetailsOnHideHandler={heroCardDetailsOnHideHandler}/>
                :
                null
            }
                </Card.Footer>
                {origin==="search" ? isAvailable?<span className="span-not-available green">Available</span> : <span className="span-not-available red">Not Available</span>
                : ""}
            </Card>
        </Col>
    )
}

HeroCard.propTypes = {
    hero: PropTypes.object.isRequired,
}

export default HeroCard
