import { useState, useEffect } from 'react';
import { currentWeather } from '../api/apiWeather.js';
import DateDisplay from './DateDisplay.jsx';
import Temperature from './Temperature.jsx';
import WeatherIcon from './WeatherIcon.jsx';

const BigCard = ({ lat, lon, children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await currentWeather(lat, lon);
                setData(result);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [lat, lon]);

    if (loading) return <div className="loading">Cargando clima...</div>;
    if (!data) return <div>No hay datos disponibles</div>;

    return (
        <div className="big-card-container">
            <div className="layout-left">
                <WeatherIcon code={data.current.weather_code} />
            </div>

            <div className="layout-center">
                <Temperature
                    valor={data.current.temperature_2m}
                    unidad={data.current_units.temperature_2m}
                />
            </div>

            <div className="layout-right">
                <DateDisplay apiDate={data.current.time} />
            </div>

            {children}
        </div>
    );
};

export default BigCard;
