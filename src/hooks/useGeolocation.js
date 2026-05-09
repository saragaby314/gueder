import { useState } from 'react';

const DEFAULT_COORDS = {
  lat: 43.263,
  lon: -2.935,
  city: 'Bilbao'
};

export function useGeolocation() {
  const [coords, setCoords] = useState(() => {
    const saved = localStorage.getItem('gueder_location');
    return saved ? JSON.parse(saved) : DEFAULT_COORDS;
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getCurrentLocation = () => {
    if (!('geolocation' in navigator)) {
      setError('Tu navegador no soporta geolocalización');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          city: 'Tu ubicación'
        };
        
        console.log('Ubicación obtenida:', newCoords);
        setCoords(newCoords);
        localStorage.setItem('gueder_location', JSON.stringify(newCoords));
        setLoading(false);
        setError(null);
      },

      (err) => {
        console.error('Error de geolocalización:', err);
        
        let errorMessage = 'No se pudo obtener tu ubicación';
        
        if (err.code === 1) {
          errorMessage = 'Debes dar permiso de ubicación en tu navegador junto a la URL';
        } else if (err.code === 2) {
          errorMessage = 'Ubicación no disponible en este momento';
        } else if (err.code === 3) {
          errorMessage = 'Tiempo de espera agotado';
        }
        
        setError(errorMessage);
        setLoading(false);
      },

      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 60000
      }
    );
  };

  const resetToDefault = () => {
    setCoords(DEFAULT_COORDS);
    localStorage.setItem('gueder_location', JSON.stringify(DEFAULT_COORDS));
    setError(null);
  };

  return { 
    coords, 
    loading, 
    error, 
    getCurrentLocation, 
    resetToDefault 
  };
}