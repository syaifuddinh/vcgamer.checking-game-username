"use client";

export default function Button({
	label,
	variant = "primary",
	disabled = false,
	onClick
}) {

	return (
		<button
			type="button"
			className={`button ${variant} ${disabled === true ? "disabled" : ""}`}
			onClick={onClick}
		>
			{ label }
		</button>	
	)
}