import { useEffect, useState } from 'react'
import './App.css'

function Registro({recargarAhora}) {
  const [usuarioRegistro, SetUsuarioRegistro] = useState('')
  const [claveRegistro, SetClaveRegistro] = useState('')
  
 
  function cambiarUsuarioRegistro(evento) {
    SetUsuarioRegistro(evento.target.value)
  }

  function cambiarClaveregistro(evento) {
    SetClaveRegistro(evento.target.value) }

  async function regsitrar() {
    const peticion = await fetch('http://localhost:3000/registro?usuario=' + usuarioRegistro + '&clave=' + claveRegistro, { credentials: 'include' })
    if (peticion.ok) {
      alert('Usuario registrado')  
      recargarAhora()       
    } else {
      alert('Usuario no registrado')
    }
  }
 
  useEffect(() => {   
  }, [])
  
  return (
    <>
      <h1>Registro</h1>
        < input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuarioRegistro} onChange={cambiarUsuarioRegistro} />
        <input placeholder='Clave' type="password" name="clave" id="clave" value={claveRegistro} onChange={cambiarClaveregistro} />
        <button onClick={regsitrar}>Registrar</button>
    </>
  )
}

export default Registro
