"use client";

import Link from 'next/link'
import Menu from "./menu.json";
import Icon from "@/components/icon";
import Close from "@/assets/icons/close.svg";
import { useDispatch } from "react-redux";
import { hideSidebar } from "@/store/actions";
import "@/assets/css/layouts/default/sidebar.scss";

export default function Sidebar() {
	const dispatch = useDispatch();

	const switchSidebarVisibility = () => {
		dispatch(hideSidebar());
	}

	return (
		<>
			<div className="sidebar">
				<div className="sidebar_heading">
					<div
						className="sidebar_close-button"
						onClick={switchSidebarVisibility}
					>
						<Icon
							src={Close}
							alt="closing sidebar button"
						/>
					</div>
				</div>
				{ Menu.list.map(item => (
					<div
						key={item.key}
						className="sidebar_item"
					>
						<Link href={item.url}>
	                		{ item.label }        
	                    </Link>
					</div>
				)) }

				<div
					className="sidebar_item sidebar_logout"
				>
					<a href="#">
                		Logout        
                    </a>
				</div>
			</div>
		</>
	)
}