"use client";

import "@/assets/css/components/input/date.scss";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function DateInput({
	label = "",
	value = "",
	placeholder = "",
	type = "text",
	onChange
}) {
	const [dateValue, setDateValue] = useState("");

	const onDataChange = e => {
		const newVal = e.target.value;
		setTextValue(newVal);
		onChange(newVal);
	}

	return (
		<div className="text-input date-input">
			<div className="text-input_label">
				{ label }
			</div>

			<DatePicker
				selected={dateValue} 
				onChange={(date) => dateValue(date)} 
			/>
		</div>
	)
}