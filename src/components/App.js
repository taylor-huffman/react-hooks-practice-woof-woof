import React, { useEffect, useState } from "react";
import DogInfo from "./DogInfo";
import DogBar from "./DogBar";
import Filter from "./Filter";

const API = 'http://localhost:3001/pups'

function App() {

  const [dogs, setDogs] = useState([])
  const [dogDetails, setDogDetails] = useState([])
  const [filter, setFilter] = useState(false)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(dogs => {
      setDogs(dogs)
      setDogDetails(dogs[0])
    })
  }, [])

  const displayDogs = dogs.filter(dog => {
    if (filter === false) return true
    return dog.isGoodDog === true
  })

  return (
    <div className="App">
      <Filter filter={filter} setFilter={setFilter} />
      <DogBar dogs={displayDogs} setDogDetails={setDogDetails} />
      <DogInfo dogDetails={dogDetails} setDogDetails={setDogDetails} API={API} dogs={dogs} setDogs={setDogs} />
    </div>
  );
}

export default App;
