import React from 'react'
import HeroPowerStatItem from '../HeroPowerStatItem'
import { keysToArray } from '../../helpers/keysToArray'
import PropTypes from 'prop-types'
import NewHero from '../NewHero'

const HeroPowerStats = ({powerstats, heroEmpty, heroCardId, addHeroClickHandler, labelVisible}) => {

    const renderPowerStat = (powerstat, value) => {

        return ( 
            <HeroPowerStatItem key={powerstat} powerstat ={powerstat} value={parseInt(value)} labelVisible={labelVisible}/>
        )
    }

    return (
        <div className={`hero-powerstats ${heroEmpty ? "grid-column-1" : ""}`}>
            {
            heroEmpty ? <NewHero 
                            clases="new-hero-btn flex flex-column flex-center" 
                            addHeroClickHandler={addHeroClickHandler} 
                            heroCardId = {heroCardId}/>
            :
            keysToArray(powerstats).map(powerstat => renderPowerStat(powerstat, powerstats[powerstat]))}         
        </div>
    )
}

HeroPowerStats.propTypes = {
    powerstats: PropTypes.object.isRequired,
}

export default HeroPowerStats
