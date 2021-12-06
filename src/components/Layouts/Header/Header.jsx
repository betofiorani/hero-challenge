import React from 'react'
import SocialNav from '../SocialNav'
import {URL_SOCIAL_NAV} from '../../../constants/urls'
import { Row } from 'react-bootstrap'

const Header = props => {
    return (
        <Row>
            <SocialNav 
                linkedIn={URL_SOCIAL_NAV.linkedIn}
                github={URL_SOCIAL_NAV.github}
                CV={URL_SOCIAL_NAV.CV}
                whatsapp={URL_SOCIAL_NAV.whatsapp}
            />
        </Row>
    )
}

export default Header
