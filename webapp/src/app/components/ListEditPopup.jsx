import { useState } from "react"
import editListName from "../common/editListName";

export default function ListEditPopup(props){
    const [newName, setNewName] = useState('');
    const {listOldName, setShowEditPopup, handleListNameChange, hideEditDeletePopup} = props;

    const handleNameChange = (e) => {
        setNewName(e.target.value);
    }

    const goBack = () => {
        setShowEditPopup(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = e.target;
        const formData = new FormData(form);
        e.target.reset();
        setNewName('');
        let listNewName = formData.get('newName').trim();
        if (listNewName === "" || listNewName.length === 0) return;
        editListName(listNewName, listOldName);
        setShowEditPopup(false);
        handleListNameChange(listNewName);
        hideEditDeletePopup();
    }

    return (
        <>
            <div className="popup-base">
                <button
                    className="cancel-btn block top-[2%] left-[2%] shadow-none border-neutral-300"
                    onClick={goBack}>
                    Back
                </button>
                <form
                    className="flex"
                    onSubmit={handleSubmit}
                    >
                    <input
                        className="text-input-base"
                        type="text"
                        placeholder="New List name"
                        value={newName}
                        name="newName"
                        onChange={handleNameChange}
                        >
                    </input>
                    <button className="bg-cyan-500 text-xl px-4 font-extrabold 
                    rounded-lg">
                        &#10132;
                    </button>
                </form>
            </div>
        </>
    )
}