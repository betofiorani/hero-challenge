import axios from "axios"
import { getAlkemyURL, getSuperHeroURL } from "./utils"

// obtener el token de Alkemy
export const getAlkemyToken = async (data) => {

    const firebaseVersion =true

    if(firebaseVersion === false){
        const url = getAlkemyURL()
        const formData = new FormData()

        formData.append('email',data.userControl)
        formData.append('password',data.passwordControl)

        try {
            const response = await axios({
                url: url,
                method: 'POST',
                data: formData
            })
            console.log(response)
            return response  
        } catch (error) {
            console.log(error)
        }
    } else {
        return {data:{token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJjaGFsbGVuZ2VAYWxrZW15Lm9yZyIsImlhdCI6MTUxNjIzOTAyMn0.ilhFPrG0y7olRHifbjvcMOlH7q2YwlegT0f4aSbryBE"}}
    }
}

// Get hero or villian
export const getHero = async (heroId) => {
    
    //https://www.superheroapi.com/api/10159247425486187/644
    const url = `${getSuperHeroURL()}/${heroId}`

    try {
        const response = await axios({
            url: url,
            method: 'GET',
        })
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
    }
}

// Get hero or villian by Name
export const getHeroByName = async (heroName) => {
    
    //https://www.superheroapi.com/api/10159247425486187/search/name
    const url = `${getSuperHeroURL()}/search/${heroName}`

    try {
        const response = await axios({
            url: url,
            method: 'GET',
        })

        console.log("desde getName",response.data)
        return response.data.results

    } catch (error) {
        console.log(error)
    }
}