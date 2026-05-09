import { getWeatherInfo, iconEmojis } from '../utils/weatherMapping.js';

const WeatherIcon = ({ code }) => {
    const info = getWeatherInfo(code);

    const emoji = iconEmojis[info.icon] || iconEmojis['UNKNOWN'];

    return (
        <div className="weather-icon-container">
            <span className="weather-emoji" title={info.label}>
                {emoji}
            </span>
            <p className="weather-label">{info.label}</p>
        </div>
    );
};

export default WeatherIcon;