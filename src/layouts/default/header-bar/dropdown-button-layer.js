import DropdownMenu from "./dropdown-menu";
import Popup from "@/components/popup";

export default function DropdownButtonLayer({ children }) {
	return (
		<Popup
			left="calc(100% - 14rem)"
			top="3.75rem"
			trigger={children}
		>
			<DropdownMenu />
		</Popup>
	)
}