import React from "react";

function DogInfo({ dogDetails, setDogDetails, API, dogs, setDogs }) {

    const { id, name, isGoodDog, image } = dogDetails

    function handleOnClick() {
        fetch(`${API}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({isGoodDog: !isGoodDog})
        })
        .then(r => r.json())
        .then(dog => {
            setDogs([...dogs.filter(element => element.id !== dog.id), dog].sort((a, b) => a.id - b.id))
            setDogDetails(dog)
        })
    }

    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name}></img>
                <h2>{name}</h2>
                <button onClick={handleOnClick}>{isGoodDog ? 'Good Dog' : 'Bad Dog'}</button>
            </div>
        </div>
    )
}

export default DogInfo