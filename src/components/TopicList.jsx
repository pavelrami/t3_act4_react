function TopicList() {
  const temas = [
    { id: 1, nombre: 'Componentes', nivel: 'Fundamental' },
    { id: 2, nombre: 'Props', nivel: 'Fundamental' },
    { id: 3, nombre: 'useState', nivel: 'Intermedio' },
    { id: 4, nombre: 'Eventos', nivel: 'Intermedio' },
    { id: 5, nombre: 'Renderizado de listas', nivel: 'Intermedio' },
  ]

  return (
    <section className="card">
      <h2>✅ Temas por estudiar</h2>
      <ul className="topic-list">
        {temas.map((tema) => (
          <li key={tema.id}>
            <span>{tema.nombre}</span>
            <small>{tema.nivel}</small>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TopicList
