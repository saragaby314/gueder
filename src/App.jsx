import CardColumna from './components/CardColumna'
import Polen from './components/Polen'
import Calidad from './components/Calidad'
import Header from "./components/Header"
import './App.css'

function App() {
  return (
    <>
    
    <div>
      <Header />
    </div>

    <div>
      <h1>Güeder</h1>
        <section className="test-cards">
        <h2>Pruebas card columna</h2>
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
          <CardColumna 
            hora="13:00" 
            temperatura={18} 
            weatherCode={0}
            humedad={45} 
          />
          <CardColumna 
            hora="14:00" 
            temperatura={19} 
            weatherCode={1}
            humedad={40} 
          />
          <CardColumna 
            hora="15:00" 
            temperatura={20} 
            weatherCode={61}
            humedad={80} 
          />
        </div>
      </section>

      <Polen />
      <Calidad />
    </div>
    </>
  )
}

export default App

