# Memoria del Proyecto Güeder

## Resumen 

Güeder es una aplicación web (SPA) desarrollada en React que centraliza información meteorológica, niveles de polen y calidad del aire en una única interfaz. Nace de la necesidad de tener una herramienta sencilla y accesible para personas alérgicas y aquellas preocupadas por la calidad del aire que respiran.

El proyecto se desarrolló en aproximadamente una semana por un equipo de cuatro personas, dividiendonos el trabajo por APIs y componentes mediante metodología SCRUM.

**Estado final:** Funcional. Las 9 tareas planificadas en Jira fueron completadas.

---

## Objetivos del Proyecto

1. Desarrollar una **Single Page Application (SPA)** con React
2. Consumir **APIs REST** para obtener datos en tiempo real
3. Implementar **localStorage** para persistencia de preferencias del usuario
4. Aplicar **trabajo colaborativo** con Git y GitHub
5. Aplicar **metodología SCRUM** con seguimiento en Jira

---

## Cronología

### Fase 1
- Análisis del proyecto y definición de funcionalidades
- Diseño de la estructura de archivos
- Creación de ramas en GitHub (main, dev, API-POLEN, API-TIEMPO, API-CALIDAD)
- Configuración de protección de ramas y auto-merge
- División de tareas por miembros del equipo

### Fase 2 
- Desarrollo de los componentes individuales por cada miembro
- Integración inicial de las APIs (Open-Meteo)
- Implementación de geolocalización con localStorage
- Mapeo de códigos WMO a iconos de Google Maps

### Fase 3 
- Desarrollo del componente CardColumna
- Implementación de Header con logo y botones 
- Conexión de geolocalización con todos los componentes 
- Resolución de conflictos en Pull Requests

### Fase 4
- Integración de BigCard, CardAlargada y componentes auxiliares
- Refactorización para unificar nombres de clases CSS al inglés
- Pruebas funcionales

### Fase 5 
- Documentación: README y MEMORIA 
- Preparación de presentación
- Revisión final

### Fase 6 
- Presentación del proyecto

---

## Decisiones Técnicas

### API de Datos Meteorológicos

**Decisión:** Open-Meteo

**Alternativas consideradas:** Google Weather API, WeatherAPI

**Razón:**
- Gratuita sin límite de requests
- No requiere API key ni tarjeta de crédito
- CORS habilitado por defecto (sin necesidad de backend)
- Documentación clara y completa
- Endpoints separados para clima, calidad del aire y polen

**Problema descartado con Google Weather:**
- Requería tarjeta de crédito y configuración de billing
- Problemas de CORS al consumir desde frontend
- Necesitaba backend o proxy para funcionar

---

### Persistencia: localStorage vs Login/Registro

**Decisión:** localStorage

**Alternativas consideradas:** Sistema de autenticación con backend

**Razón:**
- Más lógico para una aplicación del tiempo (no requiere identificar usuarios)
- No necesita backend, simplifica la arquitectura
- Cumple el requisito de "mantener preferencias del usuario entre sesiones"
- Mejor experiencia de usuario (sin barreras de registro)

**Implementación:**

```javascript
// Guardar última ubicación
localStorage.setItem('gueder_location', JSON.stringify(coords));

// Recuperar al cargar la app
const saved = localStorage.getItem('gueder_location');
const coords = saved ? JSON.parse(saved) : DEFAULT_COORDS;
```

---

### Iconos Meteorológicos

**Decisión:** Google Maps Weather Icons (CDN público)

**Alternativas consideradas:** Emojis Unicode, Font Awesome, iconos SVG propios

**Razón:**
- CDN público y gratuito
- Calidad profesional (PNG 64x64 px)
- Consistencia visual entre dispositivos
- No requiere descargar ni gestionar archivos locales

**URL base:** `https://ssl.gstatic.com/onebox/weather/64/{icon_name}.png`

---

### Mapeo de Códigos WMO

**Decisión:** Crear un archivo de utilidades con el mapeo completo

**Implementación:** `src/utils/weatherMapping.js`

Se mapearon códigos WMO de Open-Meteo a nombres de iconos válidos de Google Maps. Los códigos incluyen condiciones como cielo despejado, nubosidad, lluvia (3 intensidades), nieve (3 intensidades), tormentas, niebla y granizo.

**Funciones expuestas:**
- `getWeatherInfo(code)` - Devuelve `{ label, icon }` desde el código WMO
- `getWeatherIconUrl(iconName)` - Construye la URL del icono de Google

---

## Trabajo en Equipo

### División de Tareas

| Miembro | Rama Git | Responsabilidad |
|---------|----------|-----------------|
| Luis Alonso | HEADER, COMPONENTES BOTONES É ICONOS | Diseño y maquetación UX/UI con Adobe Photoshop e Illustrator |
| Jon Aldekoa | API-TIEMPO | API meteorológica, BigCard, CardAlargada | 
| Frank Rocha | API-CALIDAD | API y componente de calidad del aire |
| Saray Guillen | API-POLEN, CARD-COLUMNA, docs | Polen, CardColumna, Geolocalización, Documentación |

---

### Workflow de Git

**Estrategia:** Feature branches + Pull Requests

**Flujo de trabajo:**
1. Crear rama desde `dev`
2. Desarrollar funcionalidad
3. Push a GitHub
4. Crear Pull Request
5. Code review por compañero
6. Aprobación y auto-merge a `dev`
7. Sincronización con `git pull origin dev`

**Protección de ramas:**
- `main`: Bloqueada, solo accesible desde `dev`
- `dev`: Requiere 1 aprobación para merge, auto-merge habilitado

---

## Problemas y Soluciones

### 1. Geolocalización con Timeout

**Problema:** Error `code: 3 - Position acquisition timed out`

**Causa:** El timeout de 10 segundos era insuficiente para obtener la ubicación GPS, especialmente en interiores o con conexión lenta.

**Solución:** Ajustar las opciones de `getCurrentPosition`:

```javascript
{
  enableHighAccuracy: false,
  timeout: 30000,        // 30 segundos
  maximumAge: 60000      // Acepta cache de 1 minuto
}
```

---

### 2. Iconos de Google Maps con Imagen Rota

**Problema:** Algunos iconos mostraban imagen rota (404) al cargar la página.

**Causa:** Algunos nombres de iconos del mapeo inicial no existían en la CDN de Google. Por ejemplo, `mostly_sunny` o `THUNDERSTORM` (singular).

**Solución:** Verificación manual de URLs y corrección de nombres:
- `mostly_sunny` → `sunny`
- `THUNDERSTORM` → `thunderstorms` (en plural)

---

### 3. Props No se Actualizaban en Polen.jsx

**Problema:** Al cambiar de ubicación con el botón "Usar mi ubicación", el componente Polen seguía mostrando "Bilbao" en el título.

**Causa:** El nombre de la ciudad estaba hardcodeado en el JSX.

**Solución:** Pasar `city` como prop desde App.jsx y usarla dinámicamente:

```// App.jsx
<Polen lat={coords.lat} lon={coords.lon} city={coords.city} />

// Polen.jsx
function Polen({ lat, lon, city = 'Bilbao' }) {
  return <h2>Polen ahora en {city}</h2>;
}
```

---

### 4. Conflicto en Nombres de Clases CSS

**Problema:** Mezcla de español e inglés en los nombres de clases CSS.

**Decisión:** Unificar todos los nombres a inglés antes de añadir los estilos.

**Coordinación:** El compañero de diseño avisó al equipo, se acordaron los cambios y se realizaron únicamente en los `className` de los archivos JSX. Los códigos técnicos del archivo `weatherMapping.js` se mantuvieron sin cambios al ser parte de las URLs de Google.

---

### 5. Confusión Inicial con la API de Google Weather

**Problema:** Inicialmente se intentó usar la API de Google Weather para obtener datos meteorológicos.

**Causa:** Google Weather requiere configuración de billing, tarjeta de crédito y tiene problemas de CORS al consumir desde frontend sin backend.

**Solución:** Uso de Open-Meteo, que ofrece datos equivalentes sin requerir ninguna configuración.

---

## Aprendizajes

### Conceptos de React aplicados

- **Custom Hooks** (`useGeolocation`) - Encapsulación de lógica reutilizable
- **useState con función inicial** - Carga de datos desde localStorage al montar
- **useEffect con dependencias** - Recarga automática al cambiar coordenadas
- **Props con valores por defecto** - Componentes flexibles y reutilizables
- **Composición de componentes** - Arquitectura modular (BigCard contiene WeatherIcon, Temperature, DateDisplay)
- **Renderizado condicional** - Manejo de estados de carga y error
- **Children prop** - Composición flexible

---

### Ejemplo: Custom Hook con localStorage

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

---

### Git y GitHub

- Trabajo con múltiples ramas simultáneas
- Resolución de conflictos de merge
- Pull Requests con code review
- Protección de ramas y auto-merge
- Comandos clave: `stash`, `merge`, `pull`, `checkout`

---

### Consumo de APIs REST

- Estructura de llamadas con `fetch` y `URLSearchParams`
- Transformación de datos (arrays paralelos a objetos)
- Manejo de errores con try-catch
- Promesas en paralelo con `Promise.all()`

---

## Conclusiones

### Logros

- SPA funcional desarrollada en menos de una semana
- Integración exitosa con la API (clima, polen, calidad del aire)
- Sistema de geolocalización con persistencia entre sesiones
- Trabajo en equipo coordinado con Git, GitHub y Jira
- README y MEMORIA

### Desafíos superados

- Aprender React desde cero en pocos días
- Coordinar el trabajo en GitHub sin conflictos graves
- Debugging de APIs externas 
- Resolución de conflictos de merge en código compartido

