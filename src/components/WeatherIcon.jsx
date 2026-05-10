import { getWeatherInfo, getWeatherIconUrl } from '../utils/weatherMapping.js';

const WeatherIcon = ({ code }) => {
    const info = getWeatherInfo(code);

    const iconUrl = getWeatherIconUrl(info.icon);

    return (
        <div className="weather-icon-container">
            <img
                src={iconUrl}
                alt={info.label}
            />
            <p className="weather-label">
                {info.label}
            </p>
        </div>
    );
};

export default WeatherIcon;