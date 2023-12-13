"use client";

import DefaultLayout from "@/layouts/default";
import "@/assets/css/pages/checking-game-username/base.scss";
import FilterBoard from "@/components/filter-board/index.js";
import SearchingInput from "@/components/input/searching/index.js";
import DataCard from "./data-card";
import useController from "./page.controller.js";
import CheckingGameModal from "./checking-game-modal.js";
import { useEffect } from "react";

export default function CheckingGameUsername() {
	const { 
		dataList,
		modalTitle,
		isModalVisible, 
		onSearch,
		showModal, hideModal 
	} = useController();


	return (
		<>
			{ isModalVisible === true && (
				<CheckingGameModal
					title={modalTitle}
					onModalClose={() => hideModal()}
				/>
			) }
			<DefaultLayout>
				<div className="default-layout_title">
					Checking Game Username
				</div>		

				<div className="checking-game-username default-layout_our-content">
					<div className="checking-game-username_1st-row">
						
						<FilterBoard>
							<SearchingInput
								placeholder="Search game by name"
								onSearch={value => onSearch(value)}
							/>
						</FilterBoard>
					</div>

					<div className="checking-game-username_picking-label">
						Pick 1 Game
					</div>	

					<div className="checking-game-username_2nd-row">
						{ dataList.map(item => (
							<DataCard
								key={item.id}
								title={item.name}
								imageSrc={item.thumbnailUrl}
								onClick={() => showModal(item.name)}
							/> 
						)) }
					</div>
				</div>
			</DefaultLayout>
		</>
	)
}
