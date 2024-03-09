
export const animalService = {
    getAnimels
}

const animalInfos = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
]

function getAnimels() {
    return animalInfos
}