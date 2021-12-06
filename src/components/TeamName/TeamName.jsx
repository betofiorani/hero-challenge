import React from 'react'
import { BsPencil } from "react-icons/bs";
import { getPrincipalPower } from '../../services/utils';
import PropTypes from 'prop-types'

const TeamName = ({nameTeam, changeNameClickHandler, teamPowerstat, clases}) => {

    let principalPower = getPrincipalPower(teamPowerstat)

    return (
        <div className={clases}>
            <h1>{nameTeam}<BsPencil className="pencil" onClick={changeNameClickHandler}/></h1>
            <span className="principalPower">{principalPower}</span>
        </div>
    )
}

TeamName.propTypes = {
    nameTeam: PropTypes.string.isRequired,
    changeNameClickHandler: PropTypes.func,
}

export default TeamName
