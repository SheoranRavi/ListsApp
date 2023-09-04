import React from "react";
import clearCompleted from "../common/clearCompleted";
export default function ClearAll(props){

    const updateItems = props.updateItems;

    const handleClick = (e) => {
        console.log("Clear All");
        clearCompleted();
        updateItems();
    }
    return (
        <>
            <button
                className="inline w-3/4 rounded-lg bg-gray-300 hover:bg-gray-400 active:bg-gray-500 justify-self-end border-2 border-indigo-600 shadow-lg shadow-black"
                onClick={handleClick}
            >
                Clear All
            </button>
        </>
    )
}