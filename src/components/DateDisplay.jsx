const DateDisplay = ({ apiDate }) => {
    if (!apiDate) return null;

    const date = new Date(apiDate);

    const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' });

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);

    const fechaFormateada = `${dayName}, ${day}-${month}-${year}`;

    return (
        <div className="date-container">
            <span className="date-text">{fechaFormateada}</span>
        </div>
    );
};

export default DateDisplay;