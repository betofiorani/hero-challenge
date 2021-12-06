import React from 'react'
import PropTypes from 'prop-types'
import IconByName from '../IconByName'
import { getColorPowerstat } from '../../helpers/getColorPowerstat'

const HeroPowerStatItem = ({powerstat, value, labelVisible = false }) => {
    
    let colorPowerstat = getColorPowerstat(value)
    
    return (
        <div className="powerstat">
            <div className="icon-container">            
                <IconByName iconName={powerstat} />
                {labelVisible ? <span>{powerstat}</span> : ""}
            </div>
            <span className={`powerstat-value ${colorPowerstat}`}>{Number.isNaN(value) ? 0 : value}</span>
        </div>
    )
}

HeroPowerStatItem.propTypes = {
    powerstat: PropTypes.string.isRequired,
    labelVisible: PropTypes.bool,
}

export default HeroPowerStatItem
