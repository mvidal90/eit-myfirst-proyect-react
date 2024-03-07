
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MoviesWrapper from '../components/MoviesWrapper'
import Detail from '../Layout/Detail'
import Navbar from '../Layout/Navbar'
import Trailer from '../Layout/Trailer'
import { Home } from '../pages/Home'
import Movies from '../pages/Movies'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />}>
                    <Route path="list" element={<MoviesWrapper />} />
                    <Route path="detail/:id" element={<Detail />} >
                        <Route path="trailer" element={<Trailer />}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}