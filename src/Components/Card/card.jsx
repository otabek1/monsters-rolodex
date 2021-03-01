import React from 'react'
import './card.css'
export const Card = (props) =>  (
    <div className="card-container">
        <img alt="monster"
        src={`https://robohash.org/${props.monster.id}?set=set4?size=100x100`} />
        <h2 >{props.monster.name}</h2>
        <h2>{props.monster.email}</h2>

    </div>
)