import { useState, useEffect } from "react";
import { fetchCalidad } from "../api/apiCalidad";
import { __transformData } from '../api/apiWeather'

function Calidad({ lat, lon, city = 'Bilbao' }) {
    const [data, setData] = useState({ data: {}, units: {} });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCalidad() {
            try {
                const result = await fetchCalidad(lat, lon);

                const transformedData = __transformData(result)
                setData({ data: transformedData.hourly, units: transformedData.hourly_units })
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadCalidad();
    }, [lat, lon]);

    if (loading) return <p>Cargando.</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <>
            <h2>Calidad del aire en {city}</h2>

            <table className="quality-table">
                <thead>
                    <tr>
                        <th>Hora</th>
                        <th>CO<sub>2</sub> (ppm)</th>
                        <th>Polvo (μg/m³)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.data.map((row, index) => (
                        <tr key={index}>
                            <td className="time">
                                {new Date(row.time).toLocaleTimeString('es-ES', {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </td>
                            <td>{row.carbon_dioxide} ppm</td>
                            <td>{row.dust} μg/m³</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Calidad;

