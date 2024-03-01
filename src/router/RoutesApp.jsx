
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detail from '../pages/Detail'
import { Home } from '../pages/Home'

export default function RoutesApp() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    )
}