import Temperature from './Temperature.jsx';

const BigCard = ({ lat, lon }) => {
    return (
        <div className="big-card-container">
            {/* Llamamos al componente de temperatura */}
            <Temperature lat={lat} lon={lon} />

            {/* aquí añadir:
                <HourlyForecast lat={lat} lon={lon} />
                <DailyForecast lat={lat} lon={lon} /> 
            */}
        </div>
    );
};

export default BigCard;