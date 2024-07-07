export const checkNumberOfLettersInWord = (str: string) => {
    const arrayFromString = str.split('')
    return arrayFromString.reduce((acc:  Record<string, number>, i) => {
        if (acc.hasOwnProperty(i)) {
            acc[i] += 1;
        } else {
            acc[i] = 1;
        }
        return acc;
    },{})
}

export const addLetters = (generalCount: Record<string, number>, additionalCount:  Record<string, number>) => {
    Object.keys(additionalCount).map(key => {
        if ( (generalCount[key] ?? 0) < additionalCount[key]) {
            generalCount = {
                ...generalCount,
                [key]: additionalCount[key]
            }
        }
        return key
    })
    return generalCount
}

export const  numberOfLetters = (array: string[])=> {
    let numberOfLetters: Record<string, number> = {};
    array.forEach(word => {
        const checkedNumberOfLetters = checkNumberOfLettersInWord(word);
        numberOfLetters = addLetters( numberOfLetters, checkedNumberOfLetters)
    })
    return numberOfLetters
}

export const gainLetters = (numberOfLetters: Record<string, number>) => {
    let allLetters: string[] = []
    Object.keys(numberOfLetters).forEach(el => {
        for (let i= 0; i < numberOfLetters[el]; i++){
            allLetters.push(el)
        }
    })
    return allLetters
}