import React from 'react'
import '../App.css'
import { LoadDestinations } from '../store/actions/DestinationActions'


const DestinationCard = (props) => {
  return (
    <div className ='destination-card' onClick={props.onClick}>
      <section className='destionation-info-wrapper'>  
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <p className = 'destination-description'>{props.description}</p>
      </section>
    </div>
  )

}
export default DestinationCard