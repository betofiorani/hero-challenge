import React, { useEffect, useState } from 'react'
import { initialTeam } from '../constants/initialValues';
import { getHero, getHeroByName } from '../services/services';
import WelcomeScreen from './../components/Layouts/WelcomeScreen'
import PageContainer from '../Containers/PageContainer';
import TopNavContainer from '../Containers/TopNavContainer';
import HeroCardContainer from '../Containers/HeroCardContainer';
import HeroSearchContainer from '../Containers/HeroSearchContainer';
import TeamInformationContainer from '../Containers/TeamInformationContainer';
import Spinner from 'react-bootstrap/Spinner'

import { getTeamPowerstat, getTeamAlignment, getTeamAverages, resetTeam,resetTeamPowerstat } from '../services/utils';
import { objectToArray } from '../helpers/keysToArray';
import { getRandomNumber } from '../helpers/getRandom';
import { alertWithTwoButtons, alertWithTimer, alertWithInput} from './../components/Alert/alerts'



const TeamPage = props => {
    
    const [nameTeam, setNameTeam] = useState('Beto Team')
    const [team, setTeam] = useState([])
    const [showHeroSearch, setShowHeroSearch] = useState(false)
    const [heroSearchResults, setHeroSearchResults] = useState([])
    const [teamPowerstat, setTeamPowerstat] = useState();
    const [teamAverages, setTeamAverages] = useState();
    const [heroSearchIsLoading, setHeroSearchIsLoading] = useState(false)
    const [addHeroCardId, setAddHeroCardId] = useState(0)
    const [teamAlignment, setTeamAlignment] = useState({})
    const[showHeroDetails, setShowHeroDetails] = useState(null)

    useEffect(() => {
        
        (async () => {
            const getTeam = await Promise.all(initialTeam.map(heroId => getHero(heroId)));
            
            setTeam(getTeam)
            const initialPowerstats = getTeam && objectToArray(getTeamPowerstat(getTeam))
            const initialAverages = getTeam && objectToArray(getTeamAverages(getTeam))
            const initialTeamAlignment = getTeam && getTeamAlignment(getTeam)
            setTeamPowerstat(initialPowerstats)
            setTeamAlignment(initialTeamAlignment)
            setTeamAverages(initialAverages)
        })()
        
    }, [])
    


    // ** HANDLERS **

    const changeNameClickHandler = () => {

        const handleConfirmChangeName = (name) => {
            setNameTeam(name)
        };
        alertWithInput("Are you Sure?","Yes",handleConfirmChangeName, "Change the Team Name...")
    }

    const resetTeamClickHandler = async () => {
        let emptyTeam = await resetTeam(team)
        let emptyPowerstat = await objectToArray(resetTeamPowerstat(team))
        setTeam(emptyTeam)
        setTeamAverages([{height: 0}, {weight:0}])
        setTeamPowerstat(emptyPowerstat)
        setTeamAlignment({bad:0, good:0, neutral:0})
    }

    const randomTeamClickHandler = async () => {
        setHeroSearchIsLoading(true)
        let newRandomTeam = []
        let teamAlign = {bad:0 , good: 0, neutral: 0}

        for(let i=0; i<=300; i++){
            let heroId = getRandomNumber(1,731)
            let hero = await getHero(heroId)
            if(newRandomTeam.length === 6){
                break;
            }
            if(teamAlign[hero.biography.alignment] <3 ){
                newRandomTeam.push(hero)  
                teamAlign[hero.biography.alignment] = teamAlign[hero.biography.alignment]+1
            }

        }
        setTeam(newRandomTeam)

        const newInitialPowerstats = newRandomTeam && objectToArray(getTeamPowerstat(newRandomTeam))
        const newInitialAverages = newRandomTeam && objectToArray(getTeamAverages(newRandomTeam))
        const newInitialTeamAlignment = newRandomTeam && getTeamAlignment(newRandomTeam)
        setTeamPowerstat(newInitialPowerstats)
        setTeamAlignment(newInitialTeamAlignment)
        setTeamAverages(newInitialAverages)
        setHeroSearchIsLoading(false)
    }

    const onDeleteHandler = (e) => {
        const heroCardId = e.target.id.split("-")[1]
        const handleConfirm = () => {
            // seteamos en el state el team pero ahora con el status deleted en el slot borrado
            let teamAux = team;
            teamAux = team.map((hero,i) =>{
                return i !== parseInt(heroCardId) ? hero : {...hero, "status":"deleted"} 
            })
            setTeam(teamAux)

            // recalculamos la alineación del equipo y la seteamos en el state.
            let heroDeletedAlignment = team[heroCardId].biography.alignment
            let newTeamAlignment = { ...teamAlignment, [heroDeletedAlignment] : teamAlignment[heroDeletedAlignment]-1 }
            setTeamAlignment(newTeamAlignment)
            
            // recalculamos los powerstats
            let newPowerstats = objectToArray(getTeamPowerstat(teamAux))
            let newAverages = objectToArray(getTeamAverages(teamAux))

            setTeamPowerstat(newPowerstats)
            setTeamAverages(newAverages)
        }
        
        alertWithTwoButtons("Are You Sure?","warning", "I regretted", "red", "very sure", "green", "footer", handleConfirm)   
    }

    const addHeroClickHandler = (heroCardId) => {
        setShowHeroSearch(true)
        setAddHeroCardId(heroCardId)
    }
    const heroSearchOnHideHandler = () => {
        setShowHeroSearch(false)
    }

    const heroSearchOnSubmitHandler = async (values) => {
        setHeroSearchIsLoading(true)
        let heroResults = await getHeroByName(values.heroName)
        setHeroSearchResults(heroResults)
        setHeroSearchIsLoading(false)
    }
    
    const heroCardDetailsClickHandler = (heroCardId) => {
        setShowHeroDetails(heroCardId)
    }

    const heroCardDetailsOnHideHandler = () => {
        setShowHeroDetails(null)
    }

    const heroCardAddClickHandler = (hero, heroCardId) => {
        let teamAux = team
        teamAux[addHeroCardId] = hero
        setTeam(teamAux)
        setShowHeroSearch(false)
        alertWithTimer("Team Member ADD succesfully","success",1500, "congratulations")

        // recalculamos la alineación del equipo y la seteamos en el state.
        let heroAddAlignment = team[addHeroCardId].biography.alignment
        let newTeamAlignment = { ...teamAlignment, [heroAddAlignment] : teamAlignment[heroAddAlignment]+1 }
        setTeamAlignment(newTeamAlignment)
        
        // recalculamos los powerstats
        let newPowerstats = objectToArray(getTeamPowerstat(teamAux))
        let newAverages = objectToArray(getTeamAverages(teamAux))

        setTeamPowerstat(newPowerstats)
        setTeamAverages(newAverages)

    }

    return (
        <WelcomeScreen clases="flex flex-center">
            <PageContainer clases="padding-0">    
                <TopNavContainer 
                    clases="top-nav-Container"
                    nameTeam={nameTeam}
                    changeNameClickHandler={changeNameClickHandler}
                    resetTeamClickHandler={resetTeamClickHandler}
                    randomTeamClickHandler={randomTeamClickHandler}
                    teamPowerstat={teamPowerstat}
                    />
                <HeroCardContainer 
                    team={team} 
                    teamPowerstats={teamPowerstat && teamPowerstat} 
                    clases="hero-card-container" 
                    onDeleteHandler={onDeleteHandler}
                    addHeroClickHandler={addHeroClickHandler}
                    showHeroDetails= {showHeroDetails}
                    heroCardDetailsClickHandler= {heroCardDetailsClickHandler}
                    heroCardDetailsOnHideHandler= {heroCardDetailsOnHideHandler}
                    />
                <HeroSearchContainer 
                    showHeroSearch={showHeroSearch} 
                    heroSearchOnHideHandler={heroSearchOnHideHandler} 
                    heroSearchOnSubmitHandler={heroSearchOnSubmitHandler}
                    heroSearchResults={heroSearchResults}
                    heroCardAddClickHandler={heroCardAddClickHandler}
                    teamAlignment={teamAlignment}
                /> 
                <TeamInformationContainer 
                    clases ="team-information-container" 
                    teamPowerstats = {teamPowerstat && teamPowerstat} 
                    teamAverages = {teamAverages && teamAverages}/>
                <div className={`spinner-loading ${heroSearchIsLoading ? "show" : "hide"}`}>
                    <Spinner className={heroSearchIsLoading ? "show" : "hide"} animation="border" />
                    <span>Loading...</span>
                </div>
            </PageContainer>
        </WelcomeScreen>
        )
}

export default TeamPage
