import "@/assets/css/layouts/default/dropdown-menu.scss";

export default function DropdownMenu({ children }) {
	return (
		<div className="dropdown-menu">
			<div className="dropdown-menu_item">
				Edit Profile
			</div>
			<div className="dropdown-menu_item dropdown-menu_logout">
				Logout
			</div>
		</div>
	)
}