import { useState } from "react"
import ListEditPopup from "./ListEditPopup";
import ListDeletePopup from "./ListDeletePopup";

export default function EditDeleteDecide(props){
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);

    const { listName, deleteList, hideEditDeletePopup, handleListNameChange } = props;

    const handleDelete = () => {
        setShowDeletePopup(false);
        deleteList(listName);
    }

    const hidePopup = () => {
        hideEditDeletePopup();
    }

    return(
        <>
            <div className="popup-base text-center">
                <div className="flex space-x-4">
                    <button className="btn"
                        onClick={() => setShowEditPopup(true)}>
                        Edit List Name
                    </button>
                    <button className="btn"
                        onClick={() => setShowDeletePopup(true)}>
                        Delete List
                    </button>
                </div>
                <button className="cancel-btn mt-2"
                    onClick={hidePopup}>
                    Cancel
                </button>
                {showEditPopup && 
                <ListEditPopup listOldName={listName} 
                                setShowEditPopup={setShowEditPopup}
                                handleListNameChange={handleListNameChange}
                                hideEditDeletePopup={hidePopup}
                                ></ListEditPopup>}
                {showDeletePopup &&
                <ListDeletePopup
                    listName={listName}
                    deleteList={handleDelete}
                    cancelDelete={hidePopup}
                    />}
            </div>
        </>
    )
}