import { useGeolocation } from './hooks/useGeolocation'
import CardColumna from './components/CardColumna'
import Polen from './components/Polen'
import Calidad from './components/Calidad'
import Header from "./components/Header"
import './App.css'

function App() {
  const { coords, loading, error, getCurrentLocation, resetToDefault } = useGeolocation();

  return (
    <div className="app">
      <header className="app-header">
        <h1>Güeder</h1>
        <p className="location">{coords.city}</p>
        
        <div className="location-controls">
          <button onClick={getCurrentLocation} disabled={loading}>
            {loading ? 'Obteniendo...' : 'Usar mi ubicación'}
          </button>
          <button onClick={resetToDefault}>
            Bilbao
          </button>
        </div>
        
        {error && <p className="error">{error}</p>}
      </header>

      <section className="card-columna">
        <div>
          <CardColumna hora="13:00" temperatura={18} weatherCode={0} humedad={45} />
          <CardColumna hora="14:00" temperatura={19} weatherCode={1} humedad={40} />
          <CardColumna hora="15:00" temperatura={20} weatherCode={61} humedad={80} />
        </div>
      </section>

      <Polen lat={coords.lat} lon={coords.lon} city={coords.city} />
      <Calidad lat={coords.lat} lon={coords.lon} />
    </div>
    </>
  )
}

export default App

