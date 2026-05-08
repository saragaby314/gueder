import { useState } from 'react'
import Polen from './components/Polen'
import './App.css'
import BigCard from './components/BigcardTemerature.jsx';

function App() {
  const location = { lat: 43.2627, lon: -2.9253 };

  return (
    <div className="app-layout">

      <BigCard lat={location.lat} lon={location.lon} />
    </div>
  );
}

export default App

