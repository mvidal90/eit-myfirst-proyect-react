import React from 'react'
import Counter from './Counter'

function Card({
    title,
    year,
    gender,
    director,
    duration,
    points,
    isAwarded
}) {
    return (
        <div className="card__container">
            <h2>{title} <span>( {gender} - {year} )</span></h2>
            <b>{director}</b>
            <p>{duration} min.</p>
            <p>Puntuación: {points}</p>
            {isAwarded ? <p>Ha sido premiada</p> : undefined}
            <Counter />
        </div>
    )
}

export default Card