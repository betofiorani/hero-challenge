export const keysToArray = object => {
    return Object.keys(object)
}

export const objectToArray = object => {

    let array = [];
    
    Object.keys(object).map(key =>{
        
        return array.push({ [key] : object[key]})
    })
    console.log(array)
    return array
}