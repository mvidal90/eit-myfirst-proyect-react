
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import movies from '../data/movies.json'

export default function Detail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [movie, setMovie] = useState({})

    useEffect(() => {
        const movieData = movies.find( data => data.id === parseInt(id) );
        if (movieData)
            setMovie(movieData);
        return () => setMovie({})
    }, [id])

    return (
        <div className="app">
            <Link to="/">Home</Link>
            <h2>Detalle del la pelicula {movie.titulo}</h2>
            <Button
                label="Volver"
                action={() => navigate(-1)}
            />
            <br/>
            <Link to="/detail/79">fake movie</Link>
        </div>
    )
}