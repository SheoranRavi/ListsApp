import React from "react";
import clearCompleted from "../common/clearCompleted";
export default function ClearAll(props){

    const {updateItems, currentCategory} = props;

    const handleClick = (e) => {
        console.log("Clear All");
        
        clearCompleted(currentCategory);
        updateItems();
    }
    return (
        <>
            <button
                className="inline h-half max-w-max px-2 font-bold text-xs rounded-lg bg-yellow-200 hover:bg-gray-400 active:bg-gray-500 justify-self-center shadow-sm shadow-black"
                onClick={handleClick}
            >
                Clear All
            </button>
        </>
    )
}