export default function ListDeleteEditPopup(props) {
	const { listName, deleteList, cancelDelete } = props;

	const handleDelete = () => {
		deleteList(listName);
	};

	return (
		<div
			className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
            p-5 w-10/12 lg:max-w-fit max-h-fit
            bg-cyan-400 rounded-md z-50 bg-opacity-90 shadow shadow-gray-700 shadow-md"
		>
				<div className="block text-center">
					<h1 className="font-bold text-gray-800 text-xl">Delete List</h1>
					<div className="nav-bar-item m-auto max-w-fit mb-2 mt-2">{listName}</div>
					<p className="mb-4">
						Delete this list and all the
						items in this list?
					</p>
				</div>
				<div className="flex space-x-4 justify-center">
					<button className="btn" onClick={handleDelete}>
						Delete
					</button>
					<button className="cancel-btn" onClick={cancelDelete}>
						Cancel
					</button>
				</div>
		</div>
	);
}
