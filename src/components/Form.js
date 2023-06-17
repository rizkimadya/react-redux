import React, { useState } from "react";
import { add } from "../store";
import { useDispatch } from "react-redux";

const Form = () => {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	const handleChange = e => {
		setText(e.target.value);
	};
	const handleAdd = e => {
		e.preventDefault();
		dispatch(add(text));
		setText("");
	};
	return (
		<form onSubmit={handleAdd}>
			<input
				type="text"
				value={text}
				onChange={handleChange}
				placeholder="Enter new task"
			/>
			<button>add</button>
		</form>
	);
};

export default Form;
