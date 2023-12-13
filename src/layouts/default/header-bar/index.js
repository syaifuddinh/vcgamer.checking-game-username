"use client";

import Icon from "@/components/icon";
import AccountCircle from "@/assets/icons/account-circle.svg";
import Menu from "@/assets/icons/menu.svg";
import PrimaryMenu from "@/assets/icons/primary/menu.svg";
import ExpandMore from "@/assets/icons/expand-more.svg";
import DropdownButtonLayer from "./dropdown-button-layer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchSidebar } from "@/store/actions";
import "@/assets/css/layouts/default/header-bar.scss";

export default function HeaderBar() {
	const isSidebarVisible = useSelector(state => state.isSidebarVisible);
	const dispatch = useDispatch();

	const onMenuButtonClick = () => {
		dispatch(switchSidebar());
	}

	return (
		<>
			<div className="header-bar">
				<div className="header-bar_col">
					<div
						className="header-bar_menu-button"
						onClick={onMenuButtonClick}
					>
						{ isSidebarVisible === true && (
							<Icon
								src={PrimaryMenu}
								alt="click to switch menu"
							/>
						) }

						{ isSidebarVisible === false && (
							<Icon
								src={Menu}
								alt="click to switch menu"
							/>
						) }
					</div>
				</div>

				<div className="header-bar_col header-bar_profile">
					<div className="header-bar__profile-thumbnail">
						<Icon
							src={AccountCircle}
							alt="profile-icon"
						/>
					</div>

					<div className="header-bar__profile-name">
						Didin
					</div>	

					
					<div className="header-bar__profile-expand-more">
						<DropdownButtonLayer>
							<Icon
								src={ExpandMore}
								alt="user-menu-button"
							/>
						</DropdownButtonLayer>
					</div>				

				</div>
			</div>
		</>
	)
}