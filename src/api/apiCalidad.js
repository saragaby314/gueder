const calidadAire = 'https://air-quality-api.open-meteo.com/v1/air-quality';
export async function fetchCalidad(lat, lon) {
    const params = new URLSearchParams({
        latitude: lat,
        longitude: lon,
        hourly: 'carbon_dioxide,dust',
        forecast_days: 1
    });

    const response = await fetch(`${calidadAire}?${params}`);

    if (!response.ok) {
        throw new Error(`Error fetching pollen data: ${response.status}`);
    }

    return response.json();

}
