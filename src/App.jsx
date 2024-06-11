import { useEffect, useState } from 'react'
import './App.css'
import Conversor from './Conversor'
import Usuarios from './Usuarios'
import Registro from './registro'


function App() {
  const [usuario, SetUsuario] = useState('')
  const [clave, SetClave] = useState('')
  const [logueado, setLogueado] = useState(false)
  const [recargar, setRecargar] = useState(false)


  function cambiarUsuario(evento) {
    SetUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    SetClave(evento.target.value)
  }

  function recargarAhora() {
    setRecargar(!recargar)
    
  }

  async function ingresar() {
    const peticion = await fetch('http://localhost:3000/login?usuario=' + usuario + '&clave=' + clave, { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true);
    } else {
      alert('Usuario o clave incorrecta')
    }
  }

  async function validar() {
    const peticion = await fetch('http://localhost:3000/validar', { credentials: 'include' })
    if (peticion.ok) {
      setLogueado(true)
    }
  }

  useEffect(() => {
    validar()
  }, [])

  if (logueado) {
    return (

      <>
        <Registro recargarAhora ={recargarAhora} />
        <Conversor />
        <Usuarios recargar ={recargar}/> 
      </>)
  }

  return (
    <>
      <h1>Inicio de sesión</h1>
      < input placeholder='Usuario' type="text" name="usuario" id="usuario" value={usuario} onChange={cambiarUsuario} />
      <input placeholder='Clave' type="password" name="clave" id="clave" value={clave} onChange={cambiarClave} />
      <button onClick={ingresar}>Ingresar</button>


    </>
  )
}

export default App
