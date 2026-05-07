const WEATHER_API = "https://api.open-meteo.com/v1/forecast"

async function currentWeather(lat, lon) {
    const currentUrl = `${WEATHER_API}?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,weather_code`
    try {
        const response = await fetch(
            currentUrl
        );

        const data = await response.json();
        return data;

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
        return data;
        
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
        return data;
        
    } catch (error) {
         console.error('Error en la petición:', error);       
    }
}

export { currentWeather, hourlyWeather, dailyWeather }
