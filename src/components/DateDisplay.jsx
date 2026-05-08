const DateDisplay = ({ apiDate }) => {
    const date = new Date(apiDate);
    const dayName = date.toLocaleDateString('es-ES', { weekday: 'long' });
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);

    const formatted = `${day}-${month}-${year}`;

    return (
        <div className="date-box">
            <p className="day-name">{dayName}</p>
            <p className="full-date">{formatted}</p>
        </div>
    );
};
export default DateDisplay;