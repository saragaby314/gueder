const WEATHER_API = "https://api.open-meteo.com/v1/forecast"
// Transformación de datos:
function __transposeData(data) {
    if (!data || !data.time) return data;
    const { time, ...rest } = data;
    return time.map((t, index) => {
        const obj = { time: t };
        Object.keys(rest).forEach(key => {
            obj[key] = rest[key][index];
        });
        return obj;
    });
}

function __transformData(data) {
    if (!data) return data;
    Object.keys(data).forEach(key => {
        // Corregido: usamos .includes() para verificar si la sección debe transponerse
        if (['hourly', 'daily'].includes(key)) {
            data[key] = __transposeData(data[key]);
        }
    });
    return data;
}


async function currentWeather(lat, lon) {
    const currentUrl = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code`
    try {
        const response = await fetch(
            currentUrl
        );

        const data = await response.json();
        return __transformData(data);;

    } catch (error) {
        console.error('Error en la petición:', error);
    }
}

async function hourlyWeather(lat, lon) {
    const hourlyUrl = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,weather_code,precipitation`
    try {
        const response = await fetch(
            hourlyUrl
        );

        const data = await response.json();
        return __transformData(data);;

    } catch (error) {
        console.error('Error en la petición:', error);
    }
}

async function dailyWeather(lat, lon) {
    const dailyUrl = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max`
    try {
        const response = await fetch(
            dailyUrl
        );

        const data = await response.json();
        return __transformData(data);;

    } catch (error) {
        console.error('Error en la petición:', error);
    }
}

export { currentWeather, hourlyWeather, dailyWeather }
