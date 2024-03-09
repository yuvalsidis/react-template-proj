const { useState, useEffect } = React
import { animalService } from "../services/animal.service.js";


export function AnimalList() {
    const [animals, setAnimals] = useState(null)

    useEffect(() => {
        loadAnimals()
    }, [])

    function loadAnimals() {
        setAnimals(animalService.getAnimals())
    }

    const style = {
        backgroundColor: 'red',
    }
    const tdStyle = {
        border: '2px solid black'
    }
    const theadStyle = {
        color: 'white',
        fontSize: '2em',
        padding: '10px'
    }
   
    if (!animals) return <div> Loading...</div>
    console.log(animals)
    return (
        <section className="animals-list">

            <table style={style}>
                <thead>
                    <tr style={theadStyle}><td>Rare Animals </td></tr>
                </thead>
                <tbody>
                    {
                        animals.map((animal, index) =>
                            <tr key={animal.type + index}><td style={tdStyle}>{animal.type}</td>
                            <td style={tdStyle}>{animal.count}</td>
                            <td style={tdStyle}><a href={`http://www.google.com/search?q=${animal.type}`}>search</a></td></tr>
                        )
                    }
                </tbody>
            </table>
        </section>
    )
}

