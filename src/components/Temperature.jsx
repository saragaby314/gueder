const TemperatureDisplay = ({ valor, unidad }) => (
    <div className="temp-box">
        <span className="temp-number">{valor}</span>
        <span className="temp-unit">{unidad}</span>
    </div>
);
export default TemperatureDisplay;