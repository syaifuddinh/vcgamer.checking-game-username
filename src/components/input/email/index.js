import TextInput from "@/components/input/text";

export default function EmailInput({
	label = "",
	value = "",
	onChange
}) {
	return (
		<TextInput
			label={label}
			type="email"
			value={value}
			onChange={onChange}
		/>
	)
}