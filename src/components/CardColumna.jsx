import { getWeatherInfo, getWeatherIconUrl } from '../utils/weatherMapping';

function CardColumna({ hora, temperatura, weatherCode, humedad }) {
  const weatherInfo = getWeatherInfo(weatherCode);
  const iconUrl = getWeatherIconUrl(weatherInfo.icon);

  return (
    <div className="card-columna">
      <p className="hora">{hora}</p>
      <div className="icono">
        <img 
          src={iconUrl} 
          alt={weatherInfo.label}
          title={weatherInfo.label}
        />
      </div>
      <p className="temperatura">{temperatura}°C</p>
      {humedad !== undefined && (
        <p className="humedad">⌄{humedad}%</p>
      )}
    </div>
  );
}

export default CardColumna;