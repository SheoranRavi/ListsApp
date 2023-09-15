'use client'

import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import NavBarItem from "./NavBarItem";
import storeCategories from "../common/storeCategories";
import getListCategories from "../common/getListCategories";
import AddNewList from "./AddNewList";

export default function Navbar(props) {
    //const listCategories = getListCategories();
    const listCategoriesRef = useRef([]);

	const extractCategories = useCallback(() => {
        listCategoriesRef.current = getListCategories();
		let tempCategories = [];
		let i = 1;
		for (const cat in listCategoriesRef.current) {
			tempCategories.push({
				key: i,
				name: listCategoriesRef.current[cat],
			});
			i++;
		}
		return tempCategories;
	}, [listCategoriesRef]);

	const [categories, setCategories] = useState([]);
	const [newListName, setNewListName] = useState("");
	const [showAddList, setShowAddList] = useState(false);

	const currentCategory = props.currentCategory;
	const setCategory = props.setCategory;

	const onSelect = (e) => {
		console.log(`nav bar item selected`);
		console.log(e.target.id);
		console.log(currentCategory);
		var nextCategory = e.target.id;
		if (nextCategory !== currentCategory && nextCategory) {
			setCategory(nextCategory);
		}
	};

    const onDeleteListSetDefault = () => {
        var categories = getListCategories();
        setCategory(categories.default);
        let cat = extractCategories();
        setCategories(cat);
    }

	const addCategory = (e) => {
		e.preventDefault();
		let form = e.target;
		const formData = new FormData(form);
		e.target.reset();
		setNewListName("");
		let newList = formData.get("newList").trim();
		if (newList === "" || newList.length === 0) return;
		// check if this category already exists
		if (newList in listCategoriesRef.current) {
			alert("This list already exists");
			return;
		}
		listCategoriesRef.current[newList] = newList;
        storeCategories(listCategoriesRef.current);
		setCategories(extractCategories);
        setCategory(newList);
		setShowAddList(false);
	};

	const updateNewListName = (e) => {
		let text = e.target.value;
		setNewListName(text);
	};

	const handleAddListClose = () => {
		setShowAddList(false);
	}

    useEffect(() => {
        var cats = extractCategories();
        setCategories(cats);
    }, [extractCategories])

	return (
		<>
			<div className="grid grid-cols-[7fr_1fr] bg-green-300 pb-1 rounded-lg mt-1">
				<ul className="flex overflow-x-scroll pb-1 no-scrollbar">
					{categories.map((item) => {
						return (
							<NavBarItem
								key={item.key}
								name={item.name}
								onSelect={onSelect}
                                currentCategory={currentCategory}
                                onDeleteListSetDefault={onDeleteListSetDefault}
							></NavBarItem>
						);
					})}
				</ul>
				<form
					className="flex ml-1 justify-self-end mt-1"
					onSubmit={addCategory}
				>
					{/* <input
						className="flex text-xs px-2 rounded-md shadow-md shadow-gray-400 border
                                    focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
						type="text"
						placeholder="New List"
						value={newListName}
						name="newList"
						onChange={updateNewListName}
					></input> */}
					{
						showAddList &&
						<AddNewList
							addCategory={addCategory}
							updateNewListName={updateNewListName}
							newListName={newListName}
							handleAddListClose={handleAddListClose}
						/>
					}
					<button className="bg-cyan-500 text-xl px-4 font-bold shadow-md shadow-gray-600 rounded-lg"
							onClick={() => setShowAddList(true)}>
						&#43;
					</button>
				</form>
			</div>
		</>
	);
}
