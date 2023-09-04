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
                className="inline h-half w-10/12 text-xs rounded-lg bg-yellow-200 hover:bg-gray-400 active:bg-gray-500 justify-self-center shadow-sm shadow-black"
                onClick={handleClick}
            >
                Clear All
            </button>
        </>
    )
}