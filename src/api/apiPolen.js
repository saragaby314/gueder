const BASE_URL = 'https://air-quality-api.open-meteo.com/v1/air-quality';

export async function fetchPolen(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    hourly: 'alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,olive_pollen,ragweed_pollen',
    forecast_days: 1
  });


  console.log('URL completa:', `${BASE_URL}?${params}`);
  const response = await fetch(`${BASE_URL}?${params}`);
  
  if (!response.ok) {
    throw new Error(`Error fetching pollen data: ${response.status}`);
  }

  return response.json();
}

export function getPolen(value) {
  if (value === null || value === undefined) return 'Sin datos';
  if (value === 0) return 'Ninguno';
  if (value < 10) return 'Bajo';
  if (value < 50) return 'Moderado';
  if (value < 200) return 'Alto';
  return 'Muy alto';
}