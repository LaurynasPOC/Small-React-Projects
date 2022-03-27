import React, { useState, useEffect } from "react";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personService from "./services/persons";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((initialPerson) => {
      setPersons(initialPerson);
    });
  }, []);

  let checkName = false;

  const addPerson = (event) => {
    event.preventDefault();
    persons.forEach((person) => {
      if (person.name === newName) {
        checkName = true;
      }
    });
    if (checkName === true) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };

      personService.create(personObject).then((response) => {
        console.log(response);
        setPersons(persons.concat(response));
        setNewNumber(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const personDelet = (id, e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3001/persons/${id}`)
      .then((res) =>
        console.log("Deleted", res).catch((err) => console.log(err))
      );
  };

  const handleNameAdd = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberAdd = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <Filter value={value} setValue={setValue} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameAdd={handleNameAdd}
        newNumber={newNumber}
        handleNumberAdd={handleNumberAdd}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        value={value}
        onClick={(e) => personDelet(persons.id, e)}
      />
    </div>
  );
};

export default App;
