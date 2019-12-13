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
           
            const charData= response.data.results
            setCharacters(charData);

          })
          .catch(error => {
            console.log("the data was not returned", error);
          });
      }, []);


      return(
        <div className = "container">
            <div className = "people">
            {characters.map((character)=>{
                    return(
            <CharacterCards
            name={character.name}
            birth_year= {character.birth_year} 
            height={character.height}
            mass={character.mass}
            
            />
                )
            })

            }

            </div>

    
        </div>
    )
   

}

export default CharacterData
