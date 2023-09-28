'use client'

import { useEffect, useRef, useState } from "react";
import { useCallback } from "react";
import NavBarItem from "./NavBarItem";
import storeCategories from "../common/storeCategories";
import getListCategories from "../common/getListCategories";
import AddNewList from "./AddNewList";
import getLastCategory from "../common/getlastCategory";
import setLastCategory from "../common/setLastCategory";

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

	const {currentCategory, setCategory} = props;

	const onSelect = (e) => {
		console.log(`nav bar item selected`);
		console.log(e.target.id);
		console.log(currentCategory);
		var nextCategory = e.target.id;
		if (nextCategory !== currentCategory && nextCategory) {
			handleSetCategory(nextCategory);
		}
	};

	const handleSetCategory = (category) => {
		setCategory(category);
		setLastCategory(category);
	}

    const onDeleteListSetDefault = () => {
        setFirstOrLastAsDefault();
    }

	const setLastAsActive = useCallback((categories) => {
		var values = Object.keys(categories).map((key) => categories[key]);
		var lastCat = getLastCategory();
		if(lastCat !== '' && lastCat !== undefined && values.includes(lastCat)){
			setCategory(lastCat);
			return true;
		}
		return false;
	}, [setCategory])

	const setFirstOrLastAsDefault = () => {
		var categories = getListCategories();
		var res = setLastAsActive(categories);
		if(!res)
			for(var prop in categories){
				setCategory(categories[prop]);
				break;
			}
        let cat = extractCategories();
        setCategories(cat);
	}

	const handleListNameChange = (newName) => {
		let cat = extractCategories();
		setCategories(cat);
		handleSetCategory(newName);
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
        handleSetCategory(newList);
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
		if(cats.length > 0){
			var categories = getListCategories();
			var res = setLastAsActive(categories);
			if(!res)
				setCategory(cats[0].name);
		}
    }, [extractCategories, setCategory, setLastAsActive])

	// useEffect(() => {
	// 	var categories = getListCategories();
	// 	var res = setLastAsActive(categories);
	// }, [setLastAsActive])

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
								handleListNameChange={handleListNameChange}
							></NavBarItem>
						);
					})}
				</ul>
				{showAddList && (
					<AddNewList
						addCategory={addCategory}
						updateNewListName={updateNewListName}
						newListName={newListName}
						handleAddListClose={handleAddListClose}
					/>
				)}
				<button
					className="bg-cyan-500 text-xl max-w-fit py-2 px-3 mr-1 justify-self-end self-center font-bold shadow-md shadow-gray-600 rounded-lg"
					onClick={() => setShowAddList(true)}
				>
					<big>&#43;</big>
				</button>
			</div>
		</>
	);
}
