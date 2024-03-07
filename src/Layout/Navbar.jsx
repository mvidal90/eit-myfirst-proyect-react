import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <div>
            <Link to="/">Inicio</Link>
            <Link to="/movies/list">Películas</Link>
            <Link to="/#">Contacto</Link>
        </div>
    </nav>
  )
}