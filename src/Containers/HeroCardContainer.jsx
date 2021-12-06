import React from 'react'
import Carousel from 'react-grid-carousel'
import HeroCard from '../components/HeroCard';
import PropTypes from 'prop-types'

const HeroCardContainer = ({team, clases, onDeleteHandler, addHeroClickHandler, showHeroDetails, heroCardDetailsClickHandler, heroCardDetailsOnHideHandler}) => {
    
    const renderHero = (hero,i) => {
        return (
            <Carousel.Item key={`carrousel-${i}`}>
                <HeroCard 
                    key={`hero-${i}`} 
                    hero={hero} 
                    heroCardId={i} 
                    isAvailable={true}
                    onDeleteHandler={onDeleteHandler} 
                    addHeroClickHandler={addHeroClickHandler}
                    showHeroDetails = {showHeroDetails}  
                    heroCardDetailsClickHandler = {heroCardDetailsClickHandler}
                    heroCardDetailsOnHideHandler = {heroCardDetailsOnHideHandler}
                    origin="team"
                    columnGrid={{xs:12, lg:2, sm:6, md:4}}
                    />
            </Carousel.Item>
        )
    }

    return (
        <div className={clases}>
            <Carousel
            cols={6}
            rows={1}
            gap={0}
            responsiveLayout={[
                {
                breakpoint: 1200,
                cols: 4
                },
                {
                breakpoint: 990,
                cols: 3
                },
                {
                    breakpoint: 500,
                cols: 1
                }
            ]}
            mobileBreakpoint={670}
            //arrowRight={<ArrowBtn type="right" />}
            //arrowLeft={<ArrowBtn type="left" />}
        >
                {team && team.map((hero, i) => {
                        return renderHero(hero,i)})}
            </Carousel>    
        </div>
    )
}

HeroCardContainer.propTypes = {
    onDeleteHandler: PropTypes.func,
    addHeroClickHandler: PropTypes.func,
    team: PropTypes.array,
}

export default HeroCardContainer
