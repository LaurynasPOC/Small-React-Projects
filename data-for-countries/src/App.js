import React, { useState, useEffect } from "react";
import FilterCountries from "./components/FilterCountries";
import axios from "axios";
function App() {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("effect");
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      Find countries:
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <FilterCountries countries={countries} value={value} />
    </div>
  );
}

export default App;
