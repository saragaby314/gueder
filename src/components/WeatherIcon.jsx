import { getWeatherInfo, getWeatherIconUrl } from '../utils/weatherMapping.js';

const WeatherIcon = ({ code }) => {
    const info = getWeatherInfo(code);

    const iconUrl = getWeatherIconUrl(info.icon);

    return (
        <div className="weather-icon-container" style={{ textAlign: 'left' }}>
            <img
                src={iconUrl}
                alt={info.label}
                style={{ width: '64px', height: '64px' }}
            />
            <p className="weather-label" style={{ margin: 0, fontSize: '0.9rem' }}>
                {info.label}
            </p>
        </div>
    );
};

export default WeatherIcon;