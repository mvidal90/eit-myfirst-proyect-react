
import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Text from '../components/Text'
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
            <Button
                label="Volver"
                className="button__back"
                action={() => navigate(-1)}
            />
            <Text
                renderAs="h3" 
                content={`Detalle del la pelicula ${movie.titulo}`}
            />
            <br/>
            <div className="detail__container">
                <div>
                    {
                        Object.entries(movie)
                            .map(
                                ([key, data]) => 
                                    <div key={key} className="detail__container-data-wrapper">
                                        <Text
                                            renderAs="b" 
                                            content={`${key}: `}
                                        />
                                        <Text
                                            renderAs="p" 
                                            content={data}
                                        />
                                    </div>
                            )
                    }
                    <Link to="trailer">
                        Ver trailer
                    </Link>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}