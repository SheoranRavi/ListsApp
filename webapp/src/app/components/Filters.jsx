import React, { useState } from "react";
import toDoStates from "../common/toDoStates";
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

	const setFilter = props.setFilter;
	console.log("re-rendering Filters component");

	const filterSelectedAction = (e) => {
		let filterName = e.target.id;
		console.log("Filter selected: ", filterName);
		setFilter(filterName);
	};

	return (
		<>
			<div className="flex items-center justify-center">
				<ul className="mx-6 flex items-center justify-center bg-blue-300 rounded-lg">
					{filters.map((item) => {
						return (
							<div
								key={item.id}
								id={item.name}
								className="px-4 py-2 active:bg-gray-600 active:text-blue-200  rounded-lg cursor-pointer inline-block hover:bg-gray-200 hover:text-gray-600"
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
			</div>
		</>
	);
}
