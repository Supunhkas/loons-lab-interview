import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [forecast, setForecast] = useState([]);

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=75feeac4f8af1b14320f00172f27e5ac`;
  const colomboApi =
    "https://api.openweathermap.org/data/2.5/weather?q=Colombo&APPID=75feeac4f8af1b14320f00172f27e5ac";

  const foreCastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=75feeac4f8af1b14320f00172f27e5ac`;

  const searchLocation = (e) => {
    axios.get(api).then((res) => {
      setData(res.data);
    });
  };

  const searchForecast = () => {
    axios.get(foreCastApi).then((res) => {
      setForecast(
        res.data.list.filter((item) => item.dt_txt.includes("12:00:00"))
      );
      console.log(forecast);
    });
  };

  const [colomboData, setColomboData] = useState({});

  useEffect(() => {
    axios.get(colomboApi).then((res) => {
      setColomboData(res.data);
    });
  }, []);

  return (
    <div className="container ">
      <div className="body">
        <div className="weather">
          <h1>Welcome User</h1>
          <div className="search">
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="search"
              type="text"
            />
            <button onClick={searchLocation}>Search</button>
            {/* <button onClick={searchForecast}>Get forecast</button> */}
          </div>

          <div className="location">
            <p> {data.name}</p>
          </div>

          <div className="temp">
            <p>
              {data.main?.temp ? Math.round(data.main.temp - 273.15) : ""}°C
            </p>
          </div>
          <div className="desc">
            <p>{data.weather ? data.weather[0].description : ""}</p>
          </div>

          <div className="colombo">
            <h2>Colombo</h2>
            <div className="location">
              <p>{colomboData.name}</p>
            </div>
            <div className="temp">
              <p>
                {colomboData.main?.temp
                  ? Math.round(colomboData.main.temp - 273.15)
                  : ""}
                °C
              </p>
            </div>
            <div className="desc">
              <p>
                {colomboData.weather ? colomboData.weather[0].description : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
