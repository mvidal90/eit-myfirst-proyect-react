import React from 'react';
import Text from '../components/Text'

export default function Trailer() {
  return (
    <>
        <Text
            renderAs="h3" 
            content="Trailer"
        />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/m3MiaxLMPQk?si=cJA-Xfw3Rdg6L4mm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </>
  )
}