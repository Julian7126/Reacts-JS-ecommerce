import React from 'react'
import { useState } from "react";

const Formulario = () => {
const [Form, setForm] = useState("")

  return (
    <>
    <h2>Formulario</h2>

    <form>

    <label htmlFor="nombre">Nombre</label>
    <input type="text" id='nombre' name='nombre' Value={Form}onChange={(e) => setForm (e.target.value)}/>

    <label htmlFor="telefono">Telefono</label>
    <input type="text" id='telefono' name='telefono' Value={Form}onChange={(e) => setForm (e.target.value)} />
    

    <label htmlFor="email">Email</label>
    <input type="text" id='email' name='email' Value={Form}onChange={(e) => setForm (e.target.value)}/> 


    </form>
    

    </>
    
  )
}

export default Formulario