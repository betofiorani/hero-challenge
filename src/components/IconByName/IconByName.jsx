import React from 'react';
import PropTypes from 'prop-types'

import {  
    GiCrossedSwords,
    GiBattery100,
    GiInspiration,  
    GiChestArmor,
    GiGraduateCap,
    GiMuscleUp,
    GiWeight,
    GiBodyHeight,
    GiBiceps} from 'react-icons/gi';
    
import {
    BsLightningChargeFill } from 'react-icons/bs'

export const validValues = ["combat","durability","intelligence","power","speed","strength","weight","height"];

const stateByName = {
    combat: GiCrossedSwords,
    durability: GiChestArmor,
    intelligence: GiGraduateCap,
    power: GiBattery100,
    speed: BsLightningChargeFill,
    strength: GiBiceps,
    weight: GiWeight,
    height: GiBodyHeight
}

const IconByName = ({ iconName }) => {
    const StateByName = stateByName[iconName];
    return (
        <>
            <StateByName /> 
        </>
    )
}

IconByName.propTypes = {
    iconName: PropTypes.oneOf(validValues).isRequired
}

export default IconByName;
