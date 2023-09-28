import React, { useRef, useState, useEffect } from "react";
import deleteList from "../common/deleteList";
import EditDeleteDecide from "./EditDeleteDecide";

export default function NavBarItem(props){
    const [showEditDeletePopup, setShowEditDeletePopup] = useState(false);
    const {name, onSelect, currentCategory, onDeleteListSetDefault, handleListNameChange} = props;
    const timeoutIdRef = useRef(0);

    const handleHold = (e) => {
        timeoutIdRef.current = setTimeout(() => {
            setShowEditDeletePopup(true);
        }, 1000);
    }

    const handleListDelete = (listName) => {
        deleteList(listName);
        setShowEditDeletePopup(false);
        onDeleteListSetDefault();
    }

    const handleClearTimeout = (e) => {
        clearTimeout(timeoutIdRef.current);
    }

    const hideEditDeletePopup = (e) => {
        setShowEditDeletePopup(false);
    }

	useEffect(() => {
		try {
			let e = document.getElementById(currentCategory);
			e.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
				inline: 'center'
			});
		} catch (error) {
			console.log(error);
		}
	}, [currentCategory])

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
                showEditDeletePopup &&
                <EditDeleteDecide 
                    listName={name}
                    deleteList={handleListDelete}
                    hideEditDeletePopup={hideEditDeletePopup}
                    handleListNameChange={handleListNameChange}  
                />
            }
        </>
    )
}