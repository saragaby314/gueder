import { useGeolocation } from './hooks/useGeolocation'
import CardColumna from './components/CardColumna'
import Polen from './components/Polen'
import Calidad from './components/Calidad'
import Header from "./components/Header"
import './App.css'
import BigCard from './components/BigcardTemerature.jsx'

function App() {
  const { coords, loading, error, getCurrentLocation, resetToDefault } = useGeolocation();

  return (
    <div className="app-main">
      <h1>Güeder</h1>

      {/* 2. BOTÓN PARA ACTUALIZAR (Opcional pero recomendado) */}
      <button onClick={getCurrentLocation} className="gps-button">
        {loading ? 'Localizando...' : 'Usar mi ubicación'}
      </button>

      {/* 3. PASAMOS LAS COORDENADAS A BIGCARD */}
      {/* Usamos coords.lat y coords.lon que vienen del hook */}
      <BigCard lat={coords.lat} lon={coords.lon} />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* SECCIONES RESTANTES */}
      <section className="test-cards">
        <h2>Pruebas card columna</h2>
        <div style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
          <CardColumna hora="13:00" temperatura={18} weatherCode={0} humedad={45} />
          <CardColumna hora="14:00" temperatura={19} weatherCode={1} humedad={40} />
          <CardColumna hora="15:00" temperatura={20} weatherCode={61} humedad={80} />
        </div>
      </section>

      <Polen lat={coords.lat} lon={coords.lon} city={coords.city} />
      <Calidad lat={coords.lat} lon={coords.lon} />
    </div>
  )
}

export default App