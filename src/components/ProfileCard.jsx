function ProfileCard({ nombre, carrera, materia }) {
  return (
    <section className="card profile-card">
      <h2>👤 Información del estudiante</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Carrera:</strong> {carrera}</p>
      <p><strong>Materia:</strong> {materia}</p>
    </section>
  )
}

export default ProfileCard
