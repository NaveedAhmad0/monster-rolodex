import React from 'react'
import "./card.styles.css" 

export const Card =(props)=> {
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.sin.id}?set=set2&size=180x180`} alt="sin" /> 
        <h2>{props.sin.name}</h2> 
        <p>{props.sin.email}</p>
    </div>
  )
}
