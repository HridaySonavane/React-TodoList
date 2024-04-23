import React, { useState } from "react";
import Spinner from "./Spinner";

function TodoList() {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState();

	setTimeout(() => {
		setIsLoading(false);
	}, 3000);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleClick = () => {
		if (input.trim() !== "") {
			setTodos([input, ...todos]); // Add new todo to the beginning of the array
			setInput("");
			setIsLoading(true);
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			if (input.trim() !== "") {
				setIsLoading(true);
				handleClick();
			}
		}
	};

	const handleDelete = () => {
		setTodos([]);
	};
	return (
		<div className="absolute flex justify-center items-center w-screen h-full bg-zinc-900 overflow-hidden">
			<div className="card relative w-[450px] h-[500px] bg-white rounded-md">
				<div className="text-3xl font-bold mb-10 ml-4 mt-4">ToDo-List</div>
				<div className="flex relative justify-evenly ">
					<input
						className="border border-slate-400 px-2 py-1 w-72 rounded-md"
						type="text"
						placeholder="Add your New ToDo"
						value={input}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
					/>
					<button
						className="bg-zinc-900 text-white font-medium px-3 rounded-md hover:bg-zinc-700 active:bg-zinc-900"
						type="submit"
						onClick={handleClick}
					>
						Add a ToDo
					</button>
				</div>

				{isLoading ? (
					<div className="w-[450px] m-auto flex justify-center relative top-20  ">
						<Spinner />
					</div>
				) : (
					<div className="relative mt-12">
						{todos.slice(0, 4).map((todo, index) => (
							<div key={index} className="todoList">
								{todo}
							</div>
						))}
					</div>
				)}

				<div className="absolute flex justify-center w-[450px] bottom-4">
					<button
						className="btnDelete w-72 py-2 rounded-full bg-zinc-900 text-center text-white font-medium hover:bg-zinc-700 active:bg-zinc-900"
						onClick={handleDelete}
					>
						Clear All
					</button>
				</div>
			</div>
		</div>
	);
}

export default TodoList;
