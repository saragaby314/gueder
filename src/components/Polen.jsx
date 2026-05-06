import { useState, useEffect } from 'react';
import { fetchPolen, getPolen } from '../api/apiPolen';

function Polen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPolen() {
      try {
        const result = await fetchPolen(43.263, -2.935);
        console.log('Datos transformados:', result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPolen();
  }, []);

  if (loading) return <p>Cargando polen…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section className="polen">
      <h2>Niveles de polen en Bilbao</h2>

      <table className="polen-table">
        <thead>
          <tr>
            <th>Hora</th>
            <th>Aliso</th>
            <th>Abedul</th>
            <th>Hierba</th>
            <th>Artemisa</th>
            <th>Olivo</th>
            <th>Ambrosía</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                {new Date(row.time).toLocaleTimeString('es-ES', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </td>
              <td>{row.alder} — {getPolen(row.alder)}</td>
              <td>{row.birch} — {getPolen(row.birch)}</td>
              <td>{row.grass} — {getPolen(row.grass)}</td>
              <td>{row.mugwort} — {getPolen(row.mugwort)}</td>
              <td>{row.olive} — {getPolen(row.olive)}</td>
              <td>{row.ragweed} — {getPolen(row.ragweed)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Polen;