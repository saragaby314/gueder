import { useState, useEffect } from 'react';
import { fetchPolenCurrent, fetchPolenHourly, getPolen } from '../api/apiPolen';

function Polen() {
  const [current, setCurrent] = useState(null);
  const [hourly, setHourly] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadAllPolen() {
      try {
        const [currentData, hourlyData] = await Promise.all([
          fetchPolenCurrent(43.263, -2.935),
          fetchPolenHourly(43.263, -2.935)
        ]);
        
        setCurrent(currentData);
        setHourly(hourlyData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadAllPolen();
  }, []);

  if (loading) return <p>Cargando polen…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="polen-container">
      <section className="polen-actual">
        <h2>Polen ahora en Bilbao</h2>
        <p className="polen-time">
          {new Date(current.time).toLocaleString('es-ES', {
            day: 'numeric',
            month: 'long',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
        
        <div className="polen-grid">
          <div className="polen-card">
            <h3>Aliso</h3>
            <p className="value">{current.alder_pollen} granos/m³</p>
            <p className="level">{getPolen(current.alder_pollen)}</p>
          </div>
          
          <div className="polen-card">
            <h3>Abedul</h3>
            <p className="value">{current.birch_pollen} granos/m³</p>
            <p className="level">{getPolen(current.birch_pollen)}</p>
          </div>
          
          <div className="polen-card">
            <h3>Hierba</h3>
            <p className="value">{current.grass_pollen} granos/m³</p>
            <p className="level">{getPolen(current.grass_pollen)}</p>
          </div>
          
          <div className="polen-card">
            <h3>Artemisa</h3>
            <p className="value">{current.mugwort_pollen} granos/m³</p>
            <p className="level">{getPolen(current.mugwort_pollen)}</p>
          </div>
          
          <div className="polen-card">
            <h3>Olivo</h3>
            <p className="value">{current.olive_pollen} granos/m³</p>
            <p className="level">{getPolen(current.olive_pollen)}</p>
          </div>
          
          <div className="polen-card">
            <h3>Ambrosía</h3>
            <p className="value">{current.ragweed_pollen} granos/m³</p>
            <p className="level">{getPolen(current.ragweed_pollen)}</p>
          </div>
        </div>
      </section>

      <section className="polen-forecast">
        <h2>Pronóstico de polen (24 horas)</h2>
        
        <table className="polen-table">
          <thead>
            <tr>
              <th>Hora</th>
              <th>Aliso (granos/m³)</th>
              <th>Abedul (granos/m³)</th>
              <th>Hierba (granos/m³)</th>
              <th>Artemisa (granos/m³)</th>
              <th>Olivo (granos/m³)</th>
              <th>Ambrosía (granos/m³)</th>
            </tr>
          </thead>
          <tbody>
            {hourly.map((row, index) => (
              <tr key={index}>
                <td className="time">
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
    </div>
  );
}

export default Polen;