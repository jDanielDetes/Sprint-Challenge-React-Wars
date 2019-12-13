import React from 'react'
import {
    Card,  CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
  import "./StarWars.css"



 const CharacterCards = props => {
    return (
        <div>
        <Card >
        
          <CardBody   >
            <CardTitle >Name: {props.name}</CardTitle>
            <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
            <CardText>Scanning data.....Height is approx :{props.height} Now loading mass..... mass identified... Mass:{props.mass} </CardText>
            <Button color="secondary">Learn More</Button>
          </CardBody>
        </Card>
      </div>
    )
}

export default CharacterCards


//body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}