import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Conversor() {
  const [textoAvoz, setTextoAvoz] = useState('')
  const [vozAtexto, setVozAtexto] = useState('')

  function cambiarTexto(evento) {
    setTextoAvoz(evento.target.value)
  }

  function convertirTextoAvoz() {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(textoAvoz)
    synth.speak(utterThis)
  }
  function resultado(event) {
    setVozAtexto(event.results[0][0].transcript)
  }
  function grabarVozAtexto() {
    const recognition = new window.webkitSpeechRecognition()
    recognition.lang = 'es-ES'
    recognition.start()
    recognition.onresult = resultado
  }

  return (
    <>
    <h1>Conversor TTS y STT</h1>
      <br />
      <h3>Conversor de texto a voz</h3>
      <input type="text" id="textoAvoz" value={textoAvoz} onChange={cambiarTexto} />
      <button onClick={convertirTextoAvoz}>Convertir</button>

      <h3>Conversor de voz a texto</h3>
      <button onClick={grabarVozAtexto}>Grabar</button>
      {vozAtexto}
    </>
  );

}


export default Conversor
