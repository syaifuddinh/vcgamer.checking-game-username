"use client";

import Icon from "@/components/icon";
import AddTask from "@/assets/icons/success/add-task.svg";

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
				src={AddTask}
				alt="activating user button"
			/>
		</a>	
	)
}