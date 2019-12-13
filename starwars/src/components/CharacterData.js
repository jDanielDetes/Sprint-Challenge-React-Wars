import React,{useState, useEffect} from 'react'
import axios  from "axios"



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

      return(
          <div>

          </div>
      )



}

export default CharacterData
