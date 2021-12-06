import React from 'react'
import PropTypes from 'prop-types'
import {IoMdAdd} from 'react-icons/io'

const NewHero = ({addHeroClickHandler, heroCardId, clases}) => {
    return (
        <div className="new-hero">
            <span onClick={addHeroClickHandler} id={`addHero-${heroCardId}`} className={clases}>
                <IoMdAdd id={`addHeroSvg-${heroCardId}`}/>
                New Member
            </span> 
        </div>
    )
}

NewHero.propTypes = {
    addHeroClickHandler:PropTypes.func.isRequired,
}

export default NewHero
