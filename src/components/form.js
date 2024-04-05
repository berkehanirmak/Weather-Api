import { useState } from "react";
import axios from "axios";
import "../css/form.css";

export default function Form({ setInfo, setState }) {
  const [city, setCity] = useState("");

  const handleChange = async () => {
    const API_KEY = "24429d78ed370d9ce229dc31d3cadbcd";
    const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=tr`;
    await axios(BASE_URL).then((res) => setInfo(res.data));
    await axios(BASE_URL).then((res) => console.log(res.data));
    setState(true);
  };

  return (
    <div>
      <h1>Hava Durumu</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleChange();
        }}
      >
        <div className="from">
          <input
            onChange={(e) => setCity(e.target.value)}
            className="inputText"
            type="text"
            placeholder="Şehri Giriniz"
          />
        </div>
        <div className="btnDiv">
          <button type="submit" className="btn">
            Verileri Getir
          </button>
        </div>
      </form>
    </div>
  );
}
