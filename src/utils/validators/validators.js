export const required = (value) => {
    if (value) return undefined

    return "Field is required"
}


export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length >= maxLength) {
        return `Max length is ${maxLength} symbol`
    } else {
        return undefined
    }
}




export const minLength2 = () => {
    return
}