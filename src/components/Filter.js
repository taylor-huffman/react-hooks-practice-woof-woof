import React from "react";

function Filter({ filter, setFilter }) {

    function handleOnClick() {
        setFilter(filter => !filter)
    }

    return (
        <div id="filter-div">
            <button onClick={handleOnClick} id="good-dog-filter">{filter === false ? 'Filter good dogs: OFF' : 'Filter good dogs: ON'}</button>
        </div>
    )
}

export default Filter