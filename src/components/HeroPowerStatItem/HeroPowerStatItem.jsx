import React from 'react'
import PropTypes from 'prop-types'
import IconByName from '../IconByName'

const HeroPowerStatItem = ({powerstat, value, labelVisible = false }) => {
    
    return (
        <div className="powerstat">
            <div className="icon-container">            
                <IconByName iconName={powerstat} />
                {labelVisible ? <span>{powerstat}</span> : ""}
            </div>
            <span className="powerstat-value">{value}</span>
        </div>
    )
}

HeroPowerStatItem.propTypes = {
    powerstat: PropTypes.string.isRequired,
    labelVisible: PropTypes.bool,
}

export default HeroPowerStatItem
