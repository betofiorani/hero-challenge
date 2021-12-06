import React from 'react'
import PropTypes from 'prop-types'
import { BsLinkedin,BsWhatsapp,BsGithub,BsBriefcaseFill } from "react-icons/bs";

const SocialNav = ({linkedIn, github, CV, whatsapp}) => {
    return (
        <div className="social-nav flex">
            <a href={linkedIn}><BsLinkedin /></a>  
            <a href={github}><BsGithub /></a>
            <a href={CV}><BsBriefcaseFill /></a>
            <a href={whatsapp}><BsWhatsapp /></a>
        </div>
    )
}

SocialNav.propTypes = {
    linkedIn: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    CV: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
}

export default SocialNav
