"use client";

import Image from "next/image";
import { createPortal } from "react-dom"
import Icon from "@/components/icon";
import Close from "@/assets/icons/close.svg";
import "@/assets/css/components/modal/base.scss"

export default function BaseModal({ 
	title, 
	children,
	className,
	onModalClose
}) {
	return createPortal(
		<div className="modal">
			<div className="modal_backdrop"></div>
			<div className="modal_main">
				<div className="modal_main__heading">
					<div className="modal_main__title">
						{ title }
					</div>		
					<div
						className="modal_main__close-button"
						onClick={onModalClose}
					>
						<Icon
							src={Close}
							alt="closing modal button"
						/>
					</div>		
				</div>		

				<div 
					className={`modal_main__place-your-content ${className}`}
				>
					{ children }
				</div>
			</div>
		</div>,
		window.document.body
	);
}