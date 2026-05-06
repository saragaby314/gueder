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
    throw new Error(`Error al hacer fetch en polen data: ${response.status}`);
  }

  const data = await response.json();
  
  return transformPolenData(data);
}

function transformPolenData(apiData) {
  const { time, alder_pollen, birch_pollen, grass_pollen, mugwort_pollen, olive_pollen, ragweed_pollen } = apiData.hourly;
  
  return time.map((timestamp, index) => ({
    time: timestamp,
    alder: alder_pollen[index],
    birch: birch_pollen[index],
    grass: grass_pollen[index],
    mugwort: mugwort_pollen[index],
    olive: olive_pollen[index],
    ragweed: ragweed_pollen[index]
  }));
}

export function getPolen(value) {
  if (value === null || value === undefined) return 'Sin datos';
  if (value === 0) return 'Ninguno';
  if (value < 10) return 'Bajo';
  if (value < 50) return 'Moderado';
  if (value < 200) return 'Alto';
  return 'Muy alto';
}