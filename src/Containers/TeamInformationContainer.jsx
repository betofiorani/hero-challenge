import React from 'react'
import PropTypes from 'prop-types'
import TeamPowerstats from '../components/TeamPowerstats';
import { Container } from 'react-bootstrap';

const TeamInformationContainer = ({teamPowerstats, teamAverages, clases}) => {

    return (
        <Container className={clases}>
            <TeamPowerstats 
                clases ="team-powerstats-container" 
                teamPowerstats = {teamPowerstats} 
                teamAverages = {teamAverages}
                />  
            
        </Container>
    )
}

TeamInformationContainer.propTypes = {
    teamPowerstats: PropTypes.array,
    teamAverages: PropTypes.array,
    clases: PropTypes.string,
}

export default TeamInformationContainer
