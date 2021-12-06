import React from 'react'
import PropTypes from 'prop-types'
import { Button, Container } from 'react-bootstrap'
import TeamName from '../components/TeamName';

const TopNavContainer = ({clases, nameTeam, changeNameClickHandler, teamPowerstat, resetTeamClickHandler,randomTeamClickHandler}) => {
    return (
        <Container className={clases}>
            <TeamName 
                clases="team-name"
                nameTeam={nameTeam}
                changeNameClickHandler={changeNameClickHandler}
                teamPowerstat={teamPowerstat}
                /> 
            <div className="action-buttons">
                <Button className="btn-top-nav" onClick={randomTeamClickHandler}>Random Team</Button>
                <Button className="btn-top-nav" onClick={resetTeamClickHandler}>Reset Team</Button>
            </div>  
        </Container>
    )
}

TopNavContainer.propTypes = {
    clases: PropTypes.string,
    nameTeam: PropTypes.string.isRequired,
    changeNameClickHandler: PropTypes.func.isRequired,
    resetTeamClickHandler: PropTypes.func.isRequired,
    randomTeamClickHandler: PropTypes.func.isRequired,
}

export default TopNavContainer
