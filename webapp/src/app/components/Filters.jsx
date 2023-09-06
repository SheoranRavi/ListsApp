import React, { useState } from "react";
import toDoStates from "../common/toDoStates";
import ClearAll from "./ClearAll";

export default function Filters(props) {
	const filters = [
		{
			id: 2,
			name: toDoStates.active,
		},
		{
			id: 3,
			name: toDoStates.completed,
		},
	];

	const filterState = props.filterState;
	const setFilter = props.setFilter;
	const updateItems = props.updateItems;

	console.log("re-rendering Filters component");

	const filterSelectedAction = (e) => {
		let filterName = e.target.id;
		console.log("Filter selected: ", filterName);
		setFilter(filterName);
	};

	return (
		<>
			<div className="flex justify-center pb-2">
				<div className="grid grid-cols-[1fr_3fr_1fr] w-full">
                    <div></div>
					<ul className="mx-6 flex bg-white-600 rounded-lg justify-self-center">
						{filters.map((item) => {
							return (
								<div
									key={item.id}
									id={item.name}
									className="px-4 py-2 bg-sky-300 active:bg-gray-600 active:text-blue-200  rounded-lg cursor-pointer inline-block hover:bg-gray-200 hover:text-gray-600 shadow-md shadow-black"
								>
									<li
										id={item.name}
										name="filters"
										onClick={filterSelectedAction}
									>
										{item.name}
									</li>
								</div>
							);
						})}
					</ul>
					{filterState === toDoStates.completed && (
						<ClearAll updateItems={updateItems} />
					)}
				</div>
			</div>
		</>
	);
}
