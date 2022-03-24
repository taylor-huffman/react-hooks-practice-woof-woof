import React from "react";

function DogBar({ dogs, setDogDetails }) {

    function handleOnClick(dog) {
        setDogDetails(dog)
    }

    return (
        <div id="dog-bar">
            {dogs.map(dog => {
                return <span key={dog.id} onClick={() => handleOnClick(dog)}>{dog.name}</span>
            })}
        </div>
    )
}

export default DogBar