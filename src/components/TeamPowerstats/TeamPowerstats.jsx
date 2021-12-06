import React from 'react'
import PropTypes from 'prop-types'
import HeroPowerStatItem from '../HeroPowerStatItem'


const TeamPowerstats = ({teamPowerstats, teamAverages, clases}) => {

    return (
        <div className={clases}>
            <div className="team-powerstats-box flex flex-column team-average-box">
                <h5>Averages</h5>
                <div className="team-powerstats team-averages">
                    {teamAverages && teamAverages.map(average => <HeroPowerStatItem key={Object.keys(average)[0]} powerstat={Object.keys(average)[0]} value={Object.values(average)[0].toFixed(2)} labelVisible={false}/>)}
                </div>
            </div>
            <div className="team-powerstats-box flex flex-column">
                <h5>Team Powerstats</h5>
                <div className="team-powerstats">
                    {teamPowerstats && teamPowerstats.map(powerstat => <HeroPowerStatItem key={Object.keys(powerstat)[0]} powerstat={Object.keys(powerstat)[0]} value={parseInt(Object.values(powerstat)[0])} labelVisible={true}/>)}
                </div>
            </div>
        </div>
    )
}

TeamPowerstats.propTypes = {
    teamPowerstats: PropTypes.array,
}

export default TeamPowerstats
