import CardColumna from "./CardColumna";

export function CardAlargada({ data, className, classNameChildren }) {
    return (
        <div className={className}>
            {data.map((item, index) => (
                <CardColumna
                    key={index}
                    hora={item.hora}
                    className={classNameChildren}
                    temperatura={item.temperatura}
                    weatherCode={item.weatherCode}
                    humedad={item.humedad}
                />
            ))}
        </div>
    );
}