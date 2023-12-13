"use client";

import Icon from "@/components/icon";
import FilterAlt from "@/assets/icons/filter-alt.svg";
import "@/assets/css/components/filter-board/base.scss";

export default function FilterBoard({
	children	
}) {

	return (
		<div
			className="filter-board"
		>
			<div className="filter-board_heading">
				<Icon
					src={FilterAlt}
				/>
				Filter
			</div>

			<div className="filter-board_main">
				{ children }
			</div>
		</div>	
	)
}