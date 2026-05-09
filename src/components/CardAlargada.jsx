import CardColumna from "./CardColumna";
import { hourlyWeather } from './../api/apiWeather.js'
import { useState, useEffect } from "react";

/*
    <CardColumna hora="13:00" temperatura={18} weatherCode={0} humedad={45} />
    <CardColumna hora="14:00" temperatura={19} weatherCode={1} humedad={40} />
    <CardColumna hora="15:00" temperatura={20} weatherCode={61} humedad={80} />
*/

function transformTime(time) {
    const dateOptions = { weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: false };
    const timeDate = new Date(time);


    const parts = new Intl.DateTimeFormat('es-ES', dateOptions).formatToParts(timeDate);
    const p = Object.fromEntries(parts.map(part => [part.type, part.value]));
    const finalString = `${p.hour}:${p.minute}`;
    return finalString;
}


export function CardAlargada({ lat, lon, className, classNameChildren }) {
    const [dataWeather, setDataWeather] = useState({ data: {}, units: {} });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getDataWeather = async () => {
            try {
                const result = await hourlyWeather(lat, lon);
                setDataWeather({ data: result.hourly, units: result.hourly_units });
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getDataWeather();
    }, [lat, lon]);

    if (loading) return <p>Cargando.</p>;
    if (error) return <p>Error: {error}</p>;



    return (
        <div className={className}>
            {dataWeather.data.map((item, index) => (
                <CardColumna
                    key={index}
                    hora={transformTime(item.time)}
                    className={classNameChildren}
                    temperatura={item.temperature_2m}
                    weatherCode={item.weather_code}
                    humedad={item.precipitation_probability}
                />
            ))}
        </div>
    );
}