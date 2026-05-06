import { useState, useEffect } from 'react';
import { fetchPolen, getPolen } from '../api/apiPolen';

function Polen() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPolen() {
      try {
        const result = await fetchPolen(43.263, -2.935); 
        console.log('Datos recibidos:', result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    loadPolen();
  }, []);

  if (loading) return <p>Cargando.</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h2>Datos de Polen - Bilbao</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Polen;