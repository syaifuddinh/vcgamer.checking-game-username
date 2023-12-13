"use client";

import "@/assets/css/components/input/base.scss";
import "@/assets/css/components/input/searching.scss";

import { useState } from "react";
import SearchIcon from "@/assets/icons/white/search.svg";
import Icon from "@/components/icon";

export default function SearchingInput({
	label = "",
	value = "",
	placeholder = "",
	type = "text",
	onChange,
	onSearch
}) {
	const [textValue, setTextValue] = useState("");

	const onDataChange = e => {
		const newVal = e.target.value;
		setTextValue(newVal);
		if(!onChange) return;
		onChange(newVal);
	}

	const onDataSearch = () => {
		if(!onSearch) return;
		onSearch(textValue);
	}

	return (
		<div className="text-input searching-input">
			<div className="text-input_label">
				{ label }
			</div>

			<div className="searching-input_container">
				<div className="text-input_container">
					<input
						type={type}
						className="text-input_control"
						value={textValue}
						placeholder={placeholder}
						onChange={onDataChange}
					/>

				</div>
				
				<div
					className="searching-input_button"
					onClick={onDataSearch}
				>
					<Icon
						src={SearchIcon}
						alt="searching icon"
					/>
				</div>
			</div>
		</div>
	)
}