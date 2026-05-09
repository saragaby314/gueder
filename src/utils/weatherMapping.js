export const weatherMapping = {
  0: { label: 'Cielo despejado', icon: 'sunny' },
  1: { label: 'Principalmente despejado', icon: 'sunny' },  
  2: { label: 'Nubosidad parcial', icon: 'partly_cloudy' },
  3: { label: 'Cubierto', icon: 'cloudy' },
  45: { label: 'Niebla', icon: 'fog' },
  48: { label: 'Niebla con escarcha', icon: 'fog' },
  51: { label: 'Llovizna ligera', icon: 'rain_light' },
  53: { label: 'Llovizna moderada', icon: 'rain' },
  55: { label: 'Llovizna intensa', icon: 'rain' },
  56: { label: 'Llovizna helada ligera', icon: 'rain_light' },
  57: { label: 'Llovizna helada intensa', icon: 'rain' },
  61: { label: 'Lluvia débil', icon: 'rain_light' },
  63: { label: 'Lluvia moderada', icon: 'rain' },
  65: { label: 'Lluvia fuerte', icon: 'rain_heavy' },
  66: { label: 'Lluvia gélida débil', icon: 'rain_light' },
  67: { label: 'Lluvia gélida fuerte', icon: 'rain_heavy' },
  71: { label: 'Nevada débil', icon: 'snow_light' },
  73: { label: 'Nevada moderada', icon: 'snow' },
  75: { label: 'Nevada fuerte', icon: 'snow_heavy' },
  77: { label: 'Cincha de nieve', icon: 'snow' },
  80: { label: 'Chubascos de lluvia débiles', icon: 'rain_light' },
  81: { label: 'Chubascos de lluvia moderados', icon: 'rain' },
  82: { label: 'Chubascos de lluvia violentos', icon: 'rain_heavy' },
  85: { label: 'Chubascos de nieve débiles', icon: 'snow_light' },
  86: { label: 'Chubascos de nieve fuertes', icon: 'snow_heavy' },
  95: { label: 'Tormenta', icon: 'thunderstorms' },  
  96: { label: 'Tormenta con granizo débil', icon: 'thunderstorms' },
  99: { label: 'Tormenta con granizo fuerte', icon: 'thunderstorms' }
};

export function getWeatherInfo(code) {
  return weatherMapping[code] || { label: 'Desconocido', icon: 'cloudy' };  
}

export function getWeatherIconUrl(iconName) {
  return `https://ssl.gstatic.com/onebox/weather/64/${iconName}.png`;
}