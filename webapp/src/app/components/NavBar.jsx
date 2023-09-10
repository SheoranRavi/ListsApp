'use client'

import { useEffect, useState } from "react";
import { useCallback } from "react";
import NavBarItem from "./NavBarItem";
import storeCategories from "../common/storeCategories";
import getListCategories from "../common/getListCategories";

export default function Navbar(props) {
    //const listCategories = getListCategories();
    var listCategories;

	const extractCategories = useCallback(() => {
        listCategories = getListCategories();
		let tempCategories = [];
		let i = 1;
		for (const cat in listCategories) {
			tempCategories.push({
				key: i,
				name: listCategories[cat],
			});
			i++;
		}
		return tempCategories;
	}, [listCategories]);

	const [categories, setCategories] = useState([]);
	const [newListName, setNewListName] = useState("");

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

	const addCategory = (e) => {
		e.preventDefault();
		let form = e.target;
		const formData = new FormData(form);
		e.target.reset();
		setNewListName("");
		let newList = formData.get("newList");
		if (newList === "" || newList.length === 0) return;
		// check if this category already exists
		if (newList in listCategories) {
			alert("This list already exists");
			return;
		}
		listCategories[newList] = newList;
        storeCategories(listCategories);
		setCategories(extractCategories);
	};

	const updateNewListName = (e) => {
		let text = e.target.value;
		setNewListName(text);
	};

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
							></NavBarItem>
						);
					})}
				</ul>
				<form
					className="flex ml-1 justify-self-end mt-1"
					onSubmit={addCategory}
				>
					<input
						className="flex text-xs px-2 rounded-md shadow-md shadow-gray-400"
						type="text"
						placeholder="New List"
						value={newListName}
						name="newList"
						onChange={updateNewListName}
					></input>
					<button className="bg-cyan-500 text-xl px-4 font-bold shadow-sm shadow-gray-500 rounded-lg">
						&#43;
					</button>
				</form>
			</div>
		</>
	);
}
