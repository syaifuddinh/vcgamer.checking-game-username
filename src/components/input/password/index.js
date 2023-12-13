import TextInput from "@/components/input/text";

export default function PasswordInput({
	label = "",
	value = "",
	onChange
}) {
	return (
		<TextInput
			label={label}
			type="password"
			value={value}
			onChange={onChange}
		/>
	)
}