import { useState } from 'react'

function StudyCounter() {
  const [sesiones, setSesiones] = useState(0)

  const aumentar = () => {
    setSesiones(sesiones + 1)
  }

  const disminuir = () => {
    if (sesiones > 0) {
      setSesiones(sesiones - 1)
    }
  }

  const reiniciar = () => {
    setSesiones(0)
  }

  return (
    <section className="card">
      <h2>⏱️ Sesiones de estudio</h2>
      <p className="counter">{sesiones}</p>

      <div className="buttons">
        <button onClick={disminuir}>- Disminuir</button>
        <button onClick={aumentar}>+ Agregar</button>
        <button onClick={reiniciar} className="secondary-button">
          Reiniciar
        </button>
      </div>

      {sesiones === 0 ? (
        <p className="message">Todavía no has registrado ninguna sesión.</p>
      ) : (
        <p className="message success">
          ¡Muy bien! Has completado {sesiones} sesión(es) de estudio.
        </p>
      )}
    </section>
  )
}

export default StudyCounter
