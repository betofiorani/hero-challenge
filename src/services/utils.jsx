import * as urls from '../constants/urls'
import * as credentials from '../constants/credentials'
import { keysToArray } from '../helpers/keysToArray'

export const getAlkemyURL = () => `${urls.URL_TOKEN}`
export const getSuperHeroURL = () => `${urls.URL_SUPERHERO_API}${credentials.SUPER_HERO_TOKEN}`

export const getTeamPowerstat = team => {
    let teamPowerStats = {}

        team.map(hero => {
            
            if(hero.status !== "deleted"){
                return keysToArray(hero.powerstats).map(powerstat =>{
                    return teamPowerStats[powerstat]  = (!teamPowerStats[powerstat] ? 0 : teamPowerStats[powerstat]) + parseInt(hero.powerstats[powerstat]) 
                    })
            } else {
                return ""    
            }
        })
        
    return teamPowerStats
}

export const resetTeamPowerstat = team => {
    let teamPowerStats = {}

        team.map(hero => { 
            
            return keysToArray(hero.powerstats).map(powerstat =>{
                return teamPowerStats[powerstat]  = 0 
                })
        })
        
    return teamPowerStats
}

export const getTeamAverages = team => {
    let teamAverages = {}
    let count = 0

        team.map(hero => {
            
            if(hero.status !== "deleted"){
                count++
                return keysToArray(hero.appearance).map(appearance =>{
                    
                    if(appearance === 'height' || appearance === 'weight') {
                    
                        return teamAverages[appearance]  = (!teamAverages[appearance] ? 0 : teamAverages[appearance]) + parseInt(hero.appearance[appearance][1]) 
                    
                    } else {
                        return ""
                    }
                })
            } else {
                return ""    
            }
        }) 
    return {height: !teamAverages.height ? 0 : teamAverages.height/count, weight: !teamAverages.weight ? 0 : teamAverages.weight/count}
}

export const getTeamAlignment = team => {

    let teamAlignment = {
        bad:0,
        good:0,
        neutral:0
    }

    team.map(hero => {

        switch (hero.biography.alignment) {
            case "bad": teamAlignment.bad += 1
                break;
            case "good": teamAlignment.good += 1
                break;
            case "neutral": teamAlignment.neutral +=1
                break;
            default:
                break;
        }
        return teamAlignment 
    })
    return teamAlignment
}

export const getPrincipalPower = (teamPowerstats) => {
    let principalPower = ''
    let max = 0;
    teamPowerstats && teamPowerstats.map(powerstat =>{
        if(parseInt(Object.values(powerstat)) >= max){
            max = parseInt(Object.values(powerstat))
            principalPower=Object.keys(powerstat)
        }
        return ""
    })
    return principalPower
}

export const resetTeam = team => {
    let teamAux = team;
            teamAux = team.map((hero) =>{
                return {...hero, "status":"deleted"} 
            })
    return teamAux
}