import React, { useState, useEffect } from 'react'
import Card from './Card'

import films from '../data/movies.json'

function MoviesWrapper() {
    const [serchBy, setSerchBy] = useState("")
    const [movies, setMovies] = useState(films)

    useEffect(() => {
        setMovies(
            films.filter(
                mov => mov.titulo.toLocaleLowerCase().includes(serchBy.toLocaleLowerCase())
            )
        )
    }, [serchBy])

    return (
        <div style={{ display: 'flex', flexDirection: "column"}}>
            <label htmlFor="search" hidden>Buscar</label>
            <input 
                id="search"
                name="search"
                type="text" 
                className="searcher__input"
                placeholder="Buscar película.."
                onChange={e => setSerchBy(e.target.value)}
                value={serchBy} />
            <div className="card__wrapper">
                {
                    movies.map(
                        film =>
                            <Card 
                                key={film.id}
                                id={film.id}
                                title={film.titulo}
                                year={film.anio}
                                gender={film.genero}
                                director={film.director}
                                duration={film.duracion}
                                points={film.calificacionIMDB}
                                isAwarded={film.fuePremiada}
                            />
                    )
                }
            </div>
        </div>
    )
}

export default MoviesWrapper