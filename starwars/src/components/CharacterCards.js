import React from 'react'



 const CharacterCards = props => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h2>Birth Year: {props.birth_year}</h2>
            <h3>height: {props.height}</h3>
            <p>mass: {props.mass}</p>

        </div>
    )
}

export default CharacterCards