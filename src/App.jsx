import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Conversor from './Conversor'

function App() {
  const [usuario, SetUsuario] = useState('')
  const [clave, SetClave] = useState('')
  const [logueado, setLogueado] = useState(false)

  function cambiarUsuario(evento) {
    SetUsuario(evento.target.value)
  }

  function cambiarClave(evento) {
    SetClave(evento.target.value)
  }

  async function ingresar() {
    const peticion = await fetch ('http://localhost:3000/login?usuario='+ usuario + '&clave=' + clave,{credentials:'include'})
    if (peticion.ok) {
      setLogueado(true)
    }else{
      alert('Usuario o clave incorrecta')
    }
    // if (usuario == 'admin' && clave == 'admin') {
    //   alert('Ingresaste')
    //   setLogueado(true)
    // } else {
    //   alert('Usuario o clave incorrectos')
    // }
  }

  async function validar() {
    const peticion = await fetch ('http://localhost:3000/validar',{ credentials: 'include'})
    if (peticion.ok) {
      setLogueado(true)
    }      
  }

useEffect(()=>{
  validar()
}, [])

  if (logueado) {
    return <Conversor />
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
