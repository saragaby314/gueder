# Güeder 

Es una aplicación web (SPA) desarrollada en React que proporciona información meteorológica completa, niveles de polen y calidad del aire para cualquier ubicación geográfica.

La aplicación detecta automáticamente la ubicación del usuario mediante geolocalización del navegador y persiste sus preferencias en localStorage, permitiendo una experiencia fluida sin necesidad de registro.

---

### Funcionalidades principales:

- **Pronóstico del tiempo** - Información actual y horaria con temperatura, precipitaciones e iconos meteorológicos
- **Niveles de polen** - Datos actuales y pronóstico de 24 horas para 6 tipos de plantas alérgenas
- **Calidad del aire** - Medición de CO₂ y polvo en suspensión
- **Geolocalización** - Detección automática de ubicación con persistencia en localStorage

---

## Demo

**Repositorio:** [https://github.com/saragaby314/gueder](https://github.com/saragaby314/gueder)

---

## Características

### Geolocalización 
- Detección automática de la ubicación del usuario mediante `navigator.geolocation`
- Almacenamiento de la última ubicación en `localStorage`
- Ubicación por defecto: Bilbao (43.263, -2.935)
- Botones: "Usar mi ubicación" | "Bilbao"
- Persistencia entre sesiones (sin login requerido)
- Manejo de errores específicos (permisos, timeout, no disponible)

### Widget de Polen
- **Datos actuales:** 6 tipos de polen monitorizados:
  - Aliso (Alder)
  - Abedul (Birch)
  - Hierba (Grass)
  - Artemisa (Mugwort)
  - Olivo (Olive)
  - Ambrosía (Ragweed)
- **Pronóstico:** Evolución horaria de 24 horas en formato tabla
- **Clasificación de niveles:** Ninguno / Bajo / Moderado / Alto / Muy alto
- **Unidad:** Granos/m³

### Widget Big Card (Tiempo Actual)
- Temperatura actual con su unidad
- Icono meteorológico según código WMO
- Fecha y día de la semana en formato localizado
- Composición de subcomponentes: `WeatherIcon`, `Temperature`, `DateDisplay`

### Cards Horarias (CardColumna + CardAlargada)
- Tarjetas horarias con información detallada del día
- Hora, temperatura, icono meteorológico y probabilidad de precipitación
- Iconos de Google Maps Weather (64x64 PNG)
- Componente reutilizable mediante props

### Widget de Calidad del Aire
- Tabla horaria con datos de:
  - CO₂ (ppm) - Dióxido de carbono
  - Polvo (μg/m³) - Partículas en suspensión
- Pronóstico de 24 horas
- Datos en tiempo real según ubicación

---

## Tecnologías

### Frontend
- **React** 19.2 - Biblioteca de UI
- **Vite** 8.0 - Build tool y dev server
- **JavaScript (ES6+)** - Lenguaje de programación
- **CSS3** - Estilos

### APIs Externas
- **Open-Meteo Weather Forecast API** - Datos meteorológicos
- **Open-Meteo Air Quality API** - Calidad del aire y polen
- **Google Maps Weather Icons** - Iconografía meteorológica 

### Almacenamiento
- **localStorage** - Persistencia de ubicación del usuario

### Control de versiones
- **Git** - Sistema de control de versiones
- **GitHub** - Repositorio remoto y colaboración

### Gestión del proyecto
- **Jira** - Backlog y seguimiento de sprints
- **Discord** - Comunicación del equipo
- **Adobe Photoshop y Adobe Illustrator** - Diseño UX/UI

### Metodología
- **SCRUM** - Marco de trabajo ágil

---

## Instalación

### Requisitos previos
- Node.js (v18 o superior)
- npm

### Pasos de instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/saragaby314/gueder.git

# 2. Navegar al directorio
cd gueder

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
http://localhost:5173
```

### Scripts disponibles

```bash
npm run dev      # Inicia servidor de desarrollo (Vite)
npm run build    # Genera build de producción
npm run preview  # Previsualiza build de producción
npm run lint     # Ejecuta ESLint
```

---

## Estructura del proyecto

```
gueder/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── api/
│   │   ├── apiCalidad.js          # API de calidad del aire
│   │   ├── apiPolen.js            # API de polen
│   │   └── apiWeather.js          # API de clima (current, hourly, daily)
│   ├── assets/
│   │   ├── gueder-dark-logo.svg
│   │   └── gueder-light-logo.svg
│   ├── components/
│   │   ├── BigcardTemperature.jsx # Card grande con clima actual
│   │   ├── Button.jsx             # Componente reutilizable de botón
│   │   ├── Calidad.jsx            # Widget de calidad del aire
│   │   ├── CardAlargada.jsx       # Contenedor horizontal de CardColumnas
│   │   ├── CardColumna.jsx        # Card horaria individual
│   │   ├── DateDisplay.jsx        # Visualización de fecha
│   │   ├── Header.jsx             # Cabecera de la app
│   │   ├── Location.jsx           # Componente de ubicación
│   │   ├── Logo.jsx               # Logo de Güeder
│   │   ├── Polen.jsx              # Widget completo de polen
│   │   ├── Temperature.jsx        # Visualización de temperatura
│   │   └── WeatherIcon.jsx        # Icono meteorológico
│   ├── hooks/
│   │   └── useGeolocation.js      # Hook personalizado de geolocalización
│   ├── utils/
│   │   └── weatherMapping.js      # Mapeo de códigos WMO a iconos
│   ├── App.css
│   ├── App.jsx                    # Componente principal
│   ├── index.css
│   └── main.jsx                   # Punto de entrada
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── README.md                      # Documentación técnica
└── MEMORIA.md                     # Memoria del desarrollo
```

---

## APIs utilizadas

### Open-Meteo Weather Forecast API
**Endpoint:** `https://api.open-meteo.com/v1/forecast`

**Funciones implementadas:**
- `currentWeather(lat, lon)` - Clima actual (temperatura, precipitación, código WMO)
- `hourlyWeather(lat, lon)` - Pronóstico horario (24h)
- `dailyWeather(lat, lon)` - Pronóstico diario (max, min, probabilidad lluvia)

**Parámetros principales:**
- `latitude`, `longitude` - Coordenadas geográficas
- `current` / `hourly` / `daily` - Tipo de pronóstico
- `temperature_2m`, `weather_code`, `precipitation_probability` - Variables

**Documentación:** [Open-Meteo Weather Docs](https://open-meteo.com/en/docs)

---

### Open-Meteo Air Quality API
**Endpoint:** `https://air-quality-api.open-meteo.com/v1/air-quality`

**Funciones implementadas:**
- `fetchPolenCurrent(lat, lon)` - Polen actual (6 tipos)
- `fetchPolenHourly(lat, lon)` - Pronóstico horario de polen (24h)
- `fetchCalidad(lat, lon)` - Calidad del aire (CO₂, polvo)
- `getPolen(value)` - Helper para clasificar niveles

**Tipos de polen monitorizados:**
- `alder_pollen` - Aliso
- `birch_pollen` - Abedul
- `grass_pollen` - Hierba
- `mugwort_pollen` - Artemisa
- `olive_pollen` - Olivo
- `ragweed_pollen` - Ambrosía

**Variables de calidad del aire:**
- `carbon_dioxide` - CO₂
- `dust` - Polvo

**Documentación:** [Open-Meteo Air Quality Docs](https://open-meteo.com/en/docs/air-quality-api)

---

### Google Maps Weather Icons
**Endpoint:** `https://ssl.gstatic.com/onebox/weather/64/{icon_name}.png`

**Códigos de iconos utilizados:**
- `sunny` - Despejado
- `partly_cloudy` - Parcialmente nublado
- `cloudy` - Nublado
- `rain`, `rain_light`, `rain_heavy` - Lluvia (3 intensidades)
- `snow`, `snow_light`, `snow_heavy` - Nieve (3 intensidades)
- `thunderstorms` - Tormentas
- `fog` - Niebla

**Mapeo:** Implementado en `src/utils/weatherMapping.js`.

**Documentación:** [Google Weather Icons](https://developers.google.com/maps/documentation/weather/weather-condition-icons)

---

## Componentes

### Componentes principales

| Componente | Descripción | Props |
|------------|-------------|-------|
| `App` | Componente raíz | - |
| `Header` | Cabecera con logo y botón | - |
| `BigcardTemperature` | Card grande con clima actual | `lat`, `lon`, `children` |
| `CardAlargada` | Contenedor horizontal de cards horarias | `lat`, `lon`, `className`, `classNameChildren` |
| `CardColumna` | Card individual con hora + temp + icono | `hora`, `temperatura`, `weatherCode`, `humedad` |
| `Polen` | Widget completo de polen (current + 24h) | `lat`, `lon`, `city` |
| `Calidad` | Widget de calidad del aire | `lat`, `lon`, `city` |
| `WeatherIcon` | Icono meteorológico según código WMO | `code` |
| `Temperature` | Visualización de temperatura con unidad | `valor`, `unidad` |
| `DateDisplay` | Fecha localizada en español | `apiDate` |
| `Logo` | Logo de Güeder | - |
| `Button` | Botón reutilizable | `className`, `onClick`, `children` |

### Custom Hooks

| Hook | Descripción | Returns |
|------|-------------|---------|
| `useGeolocation` | Gestión de geolocalización + localStorage | `coords`, `loading`, `error`, `getCurrentLocation`, `resetToDefault` |

### Utilidades

| Utilidad | Descripción |
|----------|-------------|
| `getWeatherInfo(code)` | Obtiene `{ label, icon }` desde código WMO |
| `getWeatherIconUrl(iconName)` | Construye URL del icono de Google |
| `getPolen(value)` | Clasifica valor de polen en niveles |

---

## Equipo

Luis Alonso, Jon Aldekoa, Frank Rocha y Saray Guillen.

---

### Tareas completadas (Jira - Sprint 0)

- [x] **GUEDER-1:** Análisis del proyecto
- [x] **GUEDER-2:** Estructura de archivos
- [x] **GUEDER-16:** Diseño UX-UI de la aplicación
- [x] **GUEDER-17:** HEADER: Logo y Botón
- [x] **GUEDER-18:** CARD-GRANDE: Mostrar Icono, Localización y Fecha/Hora
- [x] **GUEDER-19:** CARD-ALARGADA-FILA: Mostrar las Cards Columna
- [x] **GUEDER-20:** CARD-COLUMNA: Mostrar Hora, Ícono, Temperatura y Humedad
- [x] **GUEDER-21:** LocalStorage para la geolocalización
- [x] **GUEDER-22:** README y MEMORIA

## Aprendizajes

### Conceptos de React aplicados

- ✅ **Custom Hooks** (`useGeolocation`) - Lógica reutilizable de geolocalización
- ✅ **useState** - Gestión de estado local (coords, loading, error, data)
- ✅ **useEffect** - Efectos secundarios y llamadas a APIs con dependencias
- ✅ **Props** - Comunicación entre componentes padre-hijo
- ✅ **Composición de componentes** - Arquitectura modular (BigCard contiene WeatherIcon, Temperature, DateDisplay)
- ✅ **Renderizado condicional** - Manejo de estados de carga y error
- ✅ **Event handlers** - onClick para botones de ubicación
- ✅ **Children prop** - Composición flexible en BigCard

### Ejemplo de Custom Hook

```javascript
export function useGeolocation() {
  const [coords, setCoords] = useState(() => {
    const saved = localStorage.getItem('gueder_location');
    return saved ? JSON.parse(saved) : DEFAULT_COORDS;
  });

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newCoords = {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          city: 'Tu ubicación'
        };
        setCoords(newCoords);
        localStorage.setItem('gueder_location', JSON.stringify(newCoords));
      },
      (err) => setError(err.message)
    );
  };

  return { coords, loading, error, getCurrentLocation, resetToDefault };
}
```

### Buenas prácticas implementadas

- ✅ Separación de concerns (api, components, hooks, utils)
- ✅ Nombres descriptivos de variables y funciones
- ✅ Manejo de errores con try-catch
- ✅ Valores por defecto en props (`{ lat = 43.263, lon = -2.935 }`)
- ✅ Dependencias correctas en useEffect (`[lat, lon]`)
- ✅ Componentes pequeños y reutilizables
- ✅ Funciones helper en utilidades separadas
- ✅ Transformación de datos de API en funciones puras

### Trabajo en equipo

- 🤝 División de tareas por funcionalidad (APIs)
- 🤝 Code reviews entre compañeros mediante Pull Requests
- 🤝 Comunicación constante vía Discord
- 🤝 Resolución colaborativa de conflictos de merge
- 🤝 Documentación compartida (README, MEMORIA)
- 🤝 Uso de Jira para seguimiento de tareas

---

## Gestión del proyecto

**Metodología:** SCRUM

**Herramientas:**
- **Jira:** Backlog y seguimiento de tareas
- **Discord:** Comunicación del equipo
- **GitHub:** Repositorio y control de versiones
- **Adobe Photoshop y Adobe Illustrator:** Maquetación y diseño



