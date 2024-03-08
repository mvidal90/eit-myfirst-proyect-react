import React from 'react'
import ContactForm from '../components/ContactForm'
import Text from '../components/Text'

function Contact() {
    return (
        <div className="app">
            <Text
                renderAs="h2" 
                content="Contactate con nosotros"
            />
            <ContactForm />
        </div>
    )
}

export default Contact