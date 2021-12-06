import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import HeroPowerStats from '../HeroPowerStats'

const HeroDetail = ({selectedHero}) => {
    return (
        <Container className="hero-detail">
            <div className="hero-info">
                <div className="hero-imagen">
                    <img src={selectedHero.image.url} alt={selectedHero.name}/>
                </div>
                <div className="hero-infography">
                    <div className="appearance">
                        <h4>Appearance</h4>
                        <div>
                            <p><span>Gender:</span>{selectedHero.appearance.gender}</p>
                            <p><span>Race:</span>{selectedHero.appearance.race}</p>
                            <p><span>Eye color:</span>{selectedHero.appearance['eye-color']}</p>
                            <p><span>Hair color:</span>{selectedHero.appearance['hair-color']}</p>
                            <div>
                                <p><span>Height:</span>{selectedHero.appearance['height'][1]}</p>
                                <p><span>Weight:</span>{selectedHero.appearance['weight'][1]}</p>
                            </div>
                        </div>
                    </div>
                    <div className="biography">
                        <h4>Biography</h4>
                        <div>
                            <p><span>Full name:</span>{selectedHero.biography['full-name']}</p>
                            <p><span>Aliases:</span>{selectedHero.biography['aliases'].join(', ')}</p>
                            <p><span>Base:</span>{selectedHero.work.base}</p>
                            <p><span>Occupation:</span>{selectedHero.work.occupation}</p>
                        </div>
                    </div>
                </div>
            </div>  
            <h4>Powerstats</h4>
            <HeroPowerStats 
                labelVisible={true}
                powerstats = {selectedHero.powerstats}
            /> 
        </Container>
    )
}

HeroDetail.propTypes = {
    selectedHero: PropTypes.object.isRequired,
}

export default HeroDetail
