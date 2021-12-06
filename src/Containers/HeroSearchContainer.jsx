import React from 'react'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'
import HeroSearchForm from '../components/HeroSearchForm'
import HeroSearchGrid from '../components/HeroSearchGrid'

const HeroSearchContainer = ({showHeroSearch, heroSearchOnHideHandler, heroSearchOnSubmitHandler, heroSearchResults, teamAlignment, heroCardAddClickHandler}) => {

    return (
        <>        
            <Modal
                show={showHeroSearch}
                onHide={() => heroSearchOnHideHandler()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        ADD NEW MEMBER
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <HeroSearchForm 
                        formClases="search-form"
                        formGroupClases="search-input"  
                        heroSearchOnSubmitHandler={heroSearchOnSubmitHandler}/>
                    <HeroSearchGrid 
                        heroSearchResults={heroSearchResults}
                        teamAlignment={teamAlignment}
                        heroCardAddClickHandler={heroCardAddClickHandler}
                        />
                </Modal.Body>
            </Modal>
        </>
    )
}

HeroSearchContainer.propTypes = {   
    heroCardAddClickHandler: PropTypes.func,
    heroSearchOnSubmitHandler: PropTypes.func,
    heroSearchResults: PropTypes.array.isRequired,
    teamAlignment: PropTypes.object,
}

export default HeroSearchContainer
