export const weatherMapping = {
  0: { label: 'Cielo despejado', icon: 'CLEAR' },
  1: { label: 'Principalmente despejado', icon: 'MOSTLY_CLEAR' },
  2: { label: 'Nubosidad parcial', icon: 'PARTLY_CLOUDY' },
  3: { label: 'Cubierto', icon: 'CLOUDY' },
  45: { label: 'Niebla', icon: 'DUST' },
  48: { label: 'Niebla con escarcha', icon: 'DUST' },
  51: { label: 'Llovizna ligera', icon: 'LIGHT_RAIN_SHOWERS' },
  53: { label: 'Llovizna moderada', icon: 'CHANCE_OF_SHOWERS' },
  55: { label: 'Llovizna intensa', icon: 'SCATTERED_SHOWERS' },
  56: { label: 'Llovizna helada ligera', icon: 'LIGHT_RAIN_SHOWERS' },
  57: { label: 'Llovizna helada intensa', icon: 'SCATTERED_SHOWERS' },
  61: { label: 'Lluvia débil', icon: 'LIGHT_RAIN' },
  63: { label: 'Lluvia moderada', icon: 'RAIN' },
  65: { label: 'Lluvia fuerte', icon: 'HEAVY_RAIN' },
  66: { label: 'Lluvia gélida débil', icon: 'LIGHT_RAIN' },
  67: { label: 'Lluvia gélida fuerte', icon: 'HEAVY_RAIN' },
  71: { label: 'Nevada débil', icon: 'LIGHT_SNOW' },
  73: { label: 'Nevada moderada', icon: 'SNOW' },
  75: { label: 'Nevada fuerte', icon: 'HEAVY_SNOW' },
  77: { label: 'Cincha de nieve', icon: 'SNOW' },
  80: { label: 'Chubascos de lluvia débiles', icon: 'RAIN_SHOWERS' },
  81: { label: 'Chubascos de lluvia moderados', icon: 'RAIN_SHOWERS' },
  82: { label: 'Chubascos de lluvia violentos', icon: 'HEAVY_RAIN_SHOWERS' },
  85: { label: 'Chubascos de nieve débiles', icon: 'LIGHT_SNOW_SHOWERS' },
  86: { label: 'Chubascos de nieve fuertes', icon: 'HEAVY_SNOW_SHOWERS' },
  95: { label: 'Tormenta', icon: 'THUNDERSTORM' },
  96: { label: 'Tormenta con granizo débil', icon: 'HAIL_SHOWERS' },
  99: { label: 'Tormenta con granizo fuerte', icon: 'HAIL_SHOWERS' }
};

export function getWeatherInfo(code) {
  return weatherMapping[code] || { label: 'Desconocido', icon: 'UNKNOWN' };
}

/*Mapea el nombre del icono a un emoji (temporal hasta tener iconos SVG)*/
export const iconEmojis = {
  'CLEAR': '☀️',
  'MOSTLY_CLEAR': '🌤️',
  'PARTLY_CLOUDY': '⛅',
  'CLOUDY': '☁️',
  'DUST': '🌫️',
  'LIGHT_RAIN_SHOWERS': '🌦️',
  'CHANCE_OF_SHOWERS': '🌧️',
  'SCATTERED_SHOWERS': '🌧️',
  'LIGHT_RAIN': '🌧️',
  'RAIN': '🌧️',
  'HEAVY_RAIN': '🌧️',
  'LIGHT_SNOW': '🌨️',
  'SNOW': '❄️',
  'HEAVY_SNOW': '❄️',
  'LIGHT_SNOW_SHOWERS': '🌨️',
  'HEAVY_SNOW_SHOWERS': '❄️',
  'RAIN_SHOWERS': '🌧️',
  'HEAVY_RAIN_SHOWERS': '⛈️',
  'THUNDERSTORM': '⛈️',
  'HAIL_SHOWERS': '🌨️',
  'UNKNOWN': '❓'
};