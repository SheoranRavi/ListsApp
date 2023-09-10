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

	const {filterState, setFilter, updateItems, currentCategory} = props;

	console.log("re-rendering Filters component");

	const filterSelectedAction = (e) => {
		let filterName = e.target.id;
		console.log("Filter selected: ", filterName);
		setFilter(filterName);
	};

	return (
		<>
			<div className="flex justify-center pb-2 pt-2 mt-2">
				<div className="grid grid-cols-[1fr_3fr_1fr] w-full">
                    <div></div>
					<ul className="mx-6 flex space-x-1 bg-white-600 rounded-lg justify-self-center">
						{filters.map((item) => {
							return (
								<div
									key={item.id}
									id={item.name}
									className={`bg-sky-400
                                    rounded-lg cursor-pointer inline-block 
                                    hover:text-gray-800 shadow-lg shadow-gray-600
                                    ${filterState === item.name ? 'border-blue-900 border-b-4 border-l-2 border-r-2' : ''}`}
								>
									<li
										id={item.name}
										name="filters"
                                        className="px-4 py-2"
										onClick={filterSelectedAction}
									>
										{item.name}
									</li>
								</div>
							);
						})}
					</ul>
					{filterState === toDoStates.completed && (
						<ClearAll updateItems={updateItems} currentCategory={currentCategory}/>
					)}
				</div>
			</div>
		</>
	);
}
