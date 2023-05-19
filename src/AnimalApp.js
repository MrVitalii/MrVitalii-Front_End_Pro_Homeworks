import * as React from 'react'
import './App.css'

function Name({}) {
    const [name, setName] = React.useState('')

    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}/>
        </div>
    )
}

function FavoriteAnimal({animal, onAnimalChange}) {
    return (
        <div>
            <label htmlFor="animal">Favorite Animal: </label>
            <input
                id="animal"
                value={animal}
                onChange={onAnimalChange}
            />
        </div>
    )
}

function Display({animal}) {
    return <div>{`Ваше любимое животное: ${animal}!`}</div>
}

function AnimalApp() {
    const [animal, setAnimal] = React.useState('')

    return (
        <form className={'NameApp'}>
            <Name/>

            <FavoriteAnimal animal={animal} onAnimalChange={event => setAnimal(event.target.value)}/>

            <Display animal={animal}/>
        </form>
    )
}

export default AnimalApp