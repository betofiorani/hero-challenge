import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import {IoMdAdd,IoMdRemove} from 'react-icons/io'
import { alert } from './../../components/Alert/alerts'

import PropTypes from 'prop-types'

const HeroCardActions = ({hero, isActive, heroCardId, origin, heroCardDetailsClickHandler, heroCardAddClickHandler, isAvailable}) => {
    return (
        <div className={`hero-card-actions`}>
            {
                origin === "team" 
                ?
                <AiOutlineSearch className="search-hero-icon" onClick={() => heroCardDetailsClickHandler(heroCardId)}/>
                : origin === "search" ?
                (isAvailable ? 
                <IoMdAdd className="add-hero-icon" onClick={() => heroCardAddClickHandler(hero,heroCardId)}/> 
                : 
                <IoMdRemove className="disabled" disabled={true} onClick={() => alert("Not Available","error","","","","Alignment limit exceed")}/>)
                : null
            }
        </div>
    )
}

HeroCardActions.propTypes = {
    origin: PropTypes.string.isRequired,
    heroCardId: PropTypes.number.isRequired,
}

export default HeroCardActions

