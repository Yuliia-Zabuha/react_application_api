import { useState } from "react";
import img2min from "./img2min.png";
import "./App.css";

function App() {
  const [holiday, setHoliday] = useState("");
  const [inputDay, setInputDay] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputCountry, setInputCountry] = useState("");
  const [location, setLocation] = useState("");
  const [newDate, setNewDate] = useState("");
  const [weekDay, setWeekDay] = useState("");
  const [error, setError] = useState(false);
  const [displayStyle, setDisplayStyle] = useState({ display: "" });

  const upDateHoliday = () => {
    fetch(
      "https://holidays.abstractapi.com/v1/?api_key=29c0b7f59f0f4553a3224afc01dd02f2&country=" +
        inputCountry +
        "&year=" +
        inputYear +
        "&month=" +
        inputMonth +
        "&day=" +
        inputDay +
        ""
    )
      .then((el) => el.json())
      .then((data) => {
        setHoliday(data[0].name);
        setInputCountry(data[0].country);
        setLocation(data[0].location);
        setNewDate(inputDay + "-" + inputMonth + "-" + inputYear);
        setWeekDay(data[0].week_day);
        setDisplayStyle({ display: "flex" });
        setError(false);
      })
      .catch((error) => {
        setError(true);
        setDisplayStyle({ display: "none" });
      });
  };

  const style = { display: displayStyle.display };

  return (
    <div className="wrapper">
      <header className="title">National holidays</header>
      <div className="input-info-block">
        <div className="input-info">
          <label className="input-info-label">
            Enter country code
            <input
              type="text"
              className="input"
              value={inputCountry}
              onChange={(event) => {
                setInputCountry(event.target.value);
              }}
              placeholder="UA"
            />
          </label>
        </div>
        <div className="input-info">
          <label className="input-info-label">
            Enter number day
            <input
              type="text"
              className="input"
              value={inputDay}
              onChange={(event) => {
                setInputDay(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-info">
          <label className="input-info-label">
            Enter number month
            <input
              type="text"
              className="input"
              value={inputMonth}
              onChange={(event) => {
                setInputMonth(event.target.value);
              }}
            />
          </label>
        </div>
        <div className="input-info">
          <label className="input-info-label">
            Enter year
            <input
              type="text"
              className="input"
              value={inputYear}
              onChange={(event) => {
                setInputYear(event.target.value);
              }}
            />
          </label>
        </div>
        <button type="button" className="btn-info" onClick={upDateHoliday}>
          Search
        </button>
      </div>
      {error && <div className="error">Not found</div>}
      {holiday && (
        <div className="block-info" style={style}>
          <div className="text-info">
            Country: <span className="text-answer">{location}</span>
          </div>
          <div className="text-info">
            Holiday: <span className="text-answer">{holiday}</span>
          </div>
          <div className="text-info">
            Date: <span className="text-answer">{newDate}</span>
          </div>
          <div className="text-info">
            Week Day: <span className="text-answer">{weekDay}</span>
          </div>
        </div>
      )}
      <img src={img2min} alt="holidays" className="image-bg" />
    </div>
  );
}

export default App;
