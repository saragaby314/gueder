import { getWeatherInfo, getWeatherIconUrl } from '../utils/weatherMapping';

function CardColumna({ hora, temperatura, weatherCode, humedad }) {
  const weatherInfo = getWeatherInfo(weatherCode);
  const iconUrl = getWeatherIconUrl(weatherInfo.icon);

  return (
    <div className="column-card">
      <p className="hour">{hora}</p>
      <div className="icon">
        <img
          src={iconUrl}
          alt={weatherInfo.label}
          title={weatherInfo.label}
        />
      </div>
      <p className="temperature">{temperatura}°C</p>
      {humedad !== undefined && (
        <p className="humidity">{humedad}%</p>
      )}
    </div>
  );
}

export default CardColumna;