
export const animalService = {
    getAnimals
}

const animalInfos = [
    { type: 'Malayan Tiger', count: 787 },
    { type: 'Mountain Gorilla', count: 212 },
    { type: 'Fin Whale', count: 28 },
]

function getAnimals() {
    return animalInfos
}