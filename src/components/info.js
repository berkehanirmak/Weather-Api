import "../css/info.css";

function Info({ info, state }) {
  return (
    <div>
      {state ? (
        <div className="info">
          <h2 className="city">{info.name}</h2>
          <div className="weather-info">
            <p className="temperature">{info.main.temp}°C</p>
            <p className="description">
              Hava Durumu: {info.weather[0].description}
            </p>
            <p className="feels-like">Hissedilen: {info.main.feels_like}°C</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export { Info };
