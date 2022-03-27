const FilterCountries = ({ countries, value }) => {
  let search = countries.filter((countrie) =>
    countrie.name.common.toLowerCase().includes(value.toLowerCase())
  );

  const showHandler = () => {
    return (
      <div>
        {search.map((countrie, index) => (
          <div key={index}>
            <h1>{countrie.name.common}</h1>
            <p>capital {countrie.capital}</p>
            <p>area {countrie.area}</p>
            <img src={countrie.flags.png} />
          </div>
        ))}
      </div>
    );
  };

  if (value === "") {
    return (
      <div>
        {search.map((countrie) => (
          <li key={countrie.name.common}>{countrie.name.common}</li>
        ))}
      </div>
    );
  } else if (search.length === 1) {
    return (
      <div>
        {search.map((countrie, index) => (
          <div key={index}>
            <h1>{countrie.name.common}</h1>
            <p>capital {countrie.capital}</p>
            <p>area {countrie.area}</p>
            <img src={countrie.flags.png} />
          </div>
        ))}
      </div>
    );
  } else if (search.length < 10)
    return (
      <div>
        {search.map((countrie) => (
          <li key={countrie.name.common}>
            {countrie.name.common}
            <button onClick={showHandler}>Show</button>
          </li>
        ))}
      </div>
    );
  else {
    return <p>Too many matches, specify another filter</p>;
  }
};

export default FilterCountries;
