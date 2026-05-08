import { useState, useEffect } from 'react';
import { currentWeather } from '../api/apiWeather.js';

const useFetchWeather = (lat, lon) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await currentWeather(lat, lon);
                setData(result);
            } catch (error) {
                console.error("Error al cargar clima:", error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [lat, lon]);

    return { data, loading };
};

const Loading = () => <div>Cargando temperatura...</div>;
const ErrorMessage = () => <div>No hay datos disponibles</div>;



const Temperature = ({ lat, lon }) => {
    const { data, loading } = useFetchWeather(lat, lon);

    if (loading) return <Loading />;
    if (!data) return <ErrorMessage />;

    const { temperature_2m } = data.current;
    const unit = data.current_units.temperature_2m;

    return (
        <div className="card">
            <div className="temp">
                {temperature_2m}
                <span>{unit}</span>
            </div>
        </div>
    );
};

export default Temperature;