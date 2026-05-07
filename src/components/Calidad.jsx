import { useState, useEffect, use } from "react";
import { fetchCalidad } from "../api/apiCalidad";

function Calidad() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCalidad() {
            try {
                const result = await fetchCalidad(43.263, -2.935);
                console.log('Datos recibidos:', result);
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        loadCalidad();
    }, []);
    if (loading) return <p>Cargando.</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Datos de Calidad - Bilbao</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Calidad;

