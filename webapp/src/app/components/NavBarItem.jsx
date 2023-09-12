import React, { useRef, useState } from "react";
import ListDeleteEditPopup from "./ListDeleteEditPopup";
import deleteList from "../common/deleteList";

export default function NavBarItem(props){
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const {name, onSelect, currentCategory, onDeleteListSetDefault} = props;
    const timeoutIdRef = useRef(0);

    const handleHold = (e) => {
        timeoutIdRef.current = setTimeout(() => {
            setShowDeletePopup(true);
        }, 1000);
    }

    const handleListDelete = (listName) => {
        deleteList(listName);
        setShowDeletePopup(false);
        onDeleteListSetDefault();
    }

    const handleClearTimeout = (e) => {
        clearTimeout(timeoutIdRef.current);
    }

    const cancelDelete = (e) => {
        setShowDeletePopup(false);
    }

    return (
        <>
            <div className={`nav-bar-item
            ${currentCategory === name ? `border-2 shadow-inner shadow-lg bg-blue-400 text-white` : ``}`}
                id={name}
                onClick={onSelect}
                onMouseDown={handleHold}
                onMouseUp={handleClearTimeout}
                onTouchStart={handleHold}
                onTouchEnd={handleClearTimeout}>
                {name}
            </div>
            {
                showDeletePopup &&
                <ListDeleteEditPopup 
                    listName={name}
                    deleteList={handleListDelete}
                    cancelDelete={cancelDelete}    
                />
            }
        </>
    )
}