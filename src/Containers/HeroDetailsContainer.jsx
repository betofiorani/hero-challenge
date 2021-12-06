import React from 'react'
import Modal from 'react-bootstrap/Modal'
import PropTypes from 'prop-types'
import HeroDetail from '../components/HeroDetail'

const HeroDetailsContainer = ({selectedHero, heroCardId, showHeroDetails,heroCardDetailsOnHideHandler}) => {
    console.log("desde HeroDetails", selectedHero)
    return (
        <>        
            <Modal
                show={showHeroDetails === heroCardId}
                onHide={() => heroCardDetailsOnHideHandler()}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        <h2 className="hero-details-name">{`${selectedHero.id} - ${selectedHero.name}`}</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="hero-detail-container">
                    <HeroDetail 
                        selectedHero={selectedHero}
                    />
                </Modal.Body>
            </Modal>
        </>
    )
}

HeroDetailsContainer.propTypes = {
    selectedHero: PropTypes.object.isRequired,
    heroCardDetailsOnHideHandler: PropTypes.func,
}

export default HeroDetailsContainer
