import React,{useState, useEffect} from 'react'
import axios  from "axios"
import CharacterCards from "./CharacterCards"


function CharacterData() {
    const [characters, setCharacters]= useState([])
    
    useEffect(() => {
        axios
          .get(
            ` https://swapi.co/api/people/`
          )
    
          .then(response => {
            console.log(response);
            setCharacters(response.data);
          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);

        return <div></div>
      {characters.map(character => {
        return(
            <CharacterCards
            Name={character.name}
            birth_year= {character.birth_year} 
            height={character.height}
            mass={character.mass}
            
            />

        )
      })}
      

 //{name: "Luke Skywalker", height: "172", mass: "77", hair_color: "blond", skin_color: "fair", …}

}

export default CharacterData
