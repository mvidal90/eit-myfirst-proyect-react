import React from 'react'
import { Link } from 'react-router-dom'

function Card({
    id,
    title,
    year,
    gender,
    director,
    duration,
    points,
    isAwarded
}) {
    return (
        <Link to={`/movies/detail/${id}`} as="div" className="card__container">
            <h2>{title} <span>( {gender} - {year} )</span></h2>
            <b>{director}</b>
            <p>{duration} min.</p>
            <p>Puntuación: {points}</p>
            {isAwarded ? <p>Ha sido premiada</p> : undefined}
        </Link>
    )
}

export default Card