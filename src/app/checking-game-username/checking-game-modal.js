"use client";

import BaseModal from "@/components/modal/base/index.js";
import TextInput from "@/components/input/text";
import Button from "@/components/button";

export default function CheckingGameModal({
	title,
	onModalClose
}) {
	
	return (
		<BaseModal
			title={title}
			className="checking-game-modal"
			onModalClose={onModalClose}
		>
			<TextInput
				label="Game ID"
			/>

			<div className="button-bar">
				<Button
					variant="primary"
					label="Check Username Availability"
				/>
				<Button
					variant="danger"
					label="Cancel"
				/>
			</div>
		</BaseModal>
	)
}
