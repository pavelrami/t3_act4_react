import './App.css'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import StudyCounter from './components/StudyCounter'
import TopicList from './components/TopicList'

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <ProfileCard
<<<<<<< HEAD
          nombre="Carlos Pavel León Ramírez"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Programación Web"
=======
          nombre="Carlos Pavel León Ramirez"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Programacion Web"
>>>>>>> 8541a88 (Implementa .gitignore en proyecto React)
        />

        <div className="grid">
          <StudyCounter />
          <TopicList />
        </div>
      </main>

      <footer>
        <p>Práctica de React con Vite</p>
      </footer>
    </>
  )
}

export default App
