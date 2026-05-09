import { useGeolocation } from './hooks/useGeolocation'
import Polen from './components/Polen'
import Calidad from './components/Calidad'
import Header from "./components/Header"
import './App.css'
import BigCard from './components/BigcardTemerature.jsx'
import Button from './components/Button.jsx'
import { useState } from 'react'
import { CardAlargada } from './components/CardAlargada.jsx'


function App() {
  const { coords, loading, error, getCurrentLocation, resetToDefault } = useGeolocation();
  const [eleccion, setEleccion] = useState("tiempo");

  return (
    <div className="app-main">
      <Header />
      <h1>Güeder</h1>

      {/* 2. BOTÓN PARA ACTUALIZAR (Opcional pero recomendado) */}
      <button onClick={getCurrentLocation} className="gps-button">
        {loading ? 'Localizando...' : 'Usar mi ubicación'}
      </button>

      {/* 3. PASAMOS LAS COORDENADAS A BIGCARD */}
      {/* Usamos coords.lat y coords.lon que vienen del hook */}
      {coords ? (
        <>
          <div className="button-group">
            <Button onClick={() => setEleccion("tiempo")}>Tiempo</Button>
            <Button onClick={() => setEleccion("polen")}>Polen</Button>
            <Button onClick={() => setEleccion("calidad")}>Calidad del Aire</Button>
          </div>

          <div className="content-area">
            {eleccion === "tiempo" && <BigCard lat={coords.lat} lon={coords.lon} >
              <CardAlargada lat={coords.lat} lon={coords.lon} />
            </BigCard>}

            {eleccion === "polen" && <Polen lat={coords.lat} lon={coords.lon} city={coords.city} />}
            {eleccion === "calidad" && <Calidad lat={coords.lat} lon={coords.lon} />}
          </div>
        </>
      ) : (
        !loading && <p>Por favor, activa la ubicación para ver los datos.</p>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div >
  )
}

export default App