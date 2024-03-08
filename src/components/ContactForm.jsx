import React, { useState } from "react";
import Button from "./Button";
import Text from './Text'

function ContactForm() {
    const [form, setForm] = useState({
        fullname: "",
        county: "CH",
        email: "",
        content: "",
    });
    const [welcomMessage, setWelcomMessage] = useState("")

    const handleInputChange = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const onHandleSubmit = e => {
        e.preventDefault();
        setWelcomMessage(`Bienvenido ${form.fullname}, enviamos tu email desde ${form.email}, con el mensaje: "${form.content}"`)
    }

    const validateEmail = e => {
        const email = e.target.value
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isValid = regex.test(email)

        if (!isValid) {
            alert("El valor de email es invalido")
        }
    }

    return (
        <>
            <form 
                className="form-contact__container"
                onSubmit={onHandleSubmit}
                >
                <label htmlFor="fullname">Nombre completo</label>
                <input 
                    id="fullname" 
                    name="fullname" 
                    type="text" 
                    value={form.fullname} 
                    onChange={ handleInputChange }
                />
                <select name="country" id="country" onChange={ handleInputChange }>
                    <option value="AR">Argentina</option>
                    <option value="CH" selected>Chile</option>
                    <option value="CO">Colombia</option>
                    <option value="UR">Uruguay</option>
                </select>
                <label htmlFor="email">Correo Electronico</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={form.email} 
                    onChange={ handleInputChange }
                    onBlur={ validateEmail }
                />
                <label htmlFor="content">Escriba su mensaje</label>
                <textarea
                    name="content"
                    id="content"
                    cols="30"
                    rows="10"
                    value={form.content}
                    onChange={ handleInputChange }
                ></textarea>
                <Button 
                    label="Enviar"
                    type="submit"
                />
            </form>
            <Text
                renderAs="p"
                content={welcomMessage}
            />
        </>
    );
}

export default ContactForm;
