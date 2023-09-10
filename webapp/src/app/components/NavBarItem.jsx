import React from "react";

export default function NavBarItem(props){
    const {name, onSelect, currentCategory} = props;

    return (
        <>
            <div className={`flex shrink-0 p-2 bg-blue-500 rounded-lg cursor-pointer mt-1 ml-1 mr-1
            text-slate-700 shadow-md shadow-gray-600
            ${currentCategory === name ? `border-black border-2 shadow-inner` : ``}`}
                id={name}
                onClick={onSelect}>
                {name}
            </div>
        </>
    )
}