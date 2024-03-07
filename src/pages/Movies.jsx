import React from 'react'
import { Outlet } from 'react-router'
import Text from '../components/Text'

const Movies = () => {
  return (
    <div className="app">
        <Text
            renderAs="h2" 
            content="Peliculas"
        />
        <Outlet />
    </div>
  )
}

export default Movies