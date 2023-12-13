"use client";

import "@/assets/css/components/input/base.scss";

import { useState } from "react";

export default function TextInput({
	label = "",
	value = "",
	placeholder = "",
	type = "text",
	onChange
}) {
	const [textValue, setTextValue] = useState("");

	const onDataChange = e => {
		const newVal = e.target.value;
		setTextValue(newVal);
		onChange(newVal);
	}

	return (
		<div className="text-input">
			<div className="text-input_label">
				{ label }
			</div>

			<div className="text-input_container">
				<input
					type={type}
					className="text-input_control"
					value={textValue}
					placeholder={placeholder}
					onChange={onDataChange}
				/>
			</div>
		</div>
	)
}