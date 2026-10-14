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
          nombre="Janet López"
          carrera="Ingeniería en Sistemas Computacionales"
          materia="Desarrollo Web"
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
