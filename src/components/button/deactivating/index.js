"use client";

import Icon from "@/components/icon";
import Block from "@/assets/icons/danger/block.svg";

export default function ActivatingButton({
}) {
	const onElementClick = e => {
		e.preventDefault();
	}

	return (
		<a
			href="#"
			className="button-with-icon"
			onClick={onElementClick}
		>
			<Icon
				src={Block}
				alt="deactivating user button"
			/>
		</a>	
	)
}