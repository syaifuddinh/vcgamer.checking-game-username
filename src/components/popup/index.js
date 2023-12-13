"use client";

import { useState } from "react";
import { useRef } from "react";
import "@/assets/css/components/popup/base.scss";
import { createPortal } from "react-dom";

export default function Popup({ 
	children, 
	trigger,
	top,
	left 
}) {
	const [isVisible, setIsVisible] = useState(false);
	const popupRef = useRef(null);

	const onSwitchPopup = () => {
		const newValue = !isVisible;
		setIsVisible(newValue);
		if(newValue === true) {
			setTimeout(() => {
				window.addEventListener("click", onOutclickEmbedded);
			}, 300);
		} else if(newValue === false) {
			window.removeEventListener("click", onOutclickEmbedded);
		}
	}

	const hidePopup = () => {
		setIsVisible(false);
		window.removeEventListener("click", onOutclickEmbedded);
	}

	const onOutclickEmbedded = e => {
		const target = popupRef.current;
		if(!target) return;
		const startingX = target.offsetLeft;
		const startingY = target.offsetTop;
		const endingX = startingX + target.offsetWidth;
		const endingY = startingY + target.offsetHeight;
		const mouseX = e.x;
		const mouseY = e.y;

		if (
			mouseX >= startingX && mouseX <= endingX &&
			mouseY >= startingY && mouseY <= endingY
		) return;

		hidePopup();

	}

	return (
		<>
			<div className="popup-trigger" onClick={onSwitchPopup}>
				{ trigger }
			</div>
			{ isVisible === true && createPortal(
				<div
					ref={popupRef}
					className="popup"
					style={{top, left}}
				>
					{ children }
				</div>,
				window.document.body
			) }
		</>
	)
}