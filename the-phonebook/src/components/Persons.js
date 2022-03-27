const Persons = (props) => {
  return (
    <div>
      {props.persons
        .filter((person) => {
          if (!props.value) return true;
          if (
            person.name.includes(props.value) ||
            person.number.includes(props.value)
          ) {
            return true;
          }
        })
        .map((person) => (
          <li key={person.name}>
            {person.name} - {person.number}
            <button onClick={props.onClick}>Delete</button>
          </li>
        ))}
    </div>
  );
};

export default Persons;
