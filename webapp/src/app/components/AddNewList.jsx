export default function AddNewList(props) {
	const { addCategory, updateNewListName, newListName, handleAddListClose } = props;
	return (
		<>
			<div
				className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                p-5 max-h-fit max-w-fit bg-slate-200 rounded-lg shadow shadow-slate-400 shadow-lg
                z-50"
			>
				<div className="flex">
					<input
						className="flex px-2 py-2 rounded-md border
                                    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
						type="text"
						placeholder="Add New List"
						value={newListName}
						name="newList"
						onChange={updateNewListName}
					></input>
					<button
						className="bg-cyan-500 text-xl px-4 font-extrabold 
                    rounded-lg"
					>
						&#10132;
					</button>
				</div>
				<div className="flex justify-center">
					<button className="cancel-btn shadow-none border-neutral-300"
                        onClick={handleAddListClose}
                    >
                        Cancel
                    </button>
				</div>
			</div>
		</>
	);
}
