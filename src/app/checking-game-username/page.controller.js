"use client";

import GameService from "@/services/GameService";
import { useState } from "react";
import { useEffect } from "react";

export default function useController() {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [modalTitle, setModalTitle] = useState("");
	const [dataList, setDataList] = useState([]);
	const [keyword, setKeyword] = useState("");

	const onSearch = (newVal) => {
		setKeyword(newVal);
		getGameList(newVal);
	}

	const getGameList = async (keywordData) => {
		const params = { keyword: keywordData }
		const { data } = await GameService.Get(params);
		setDataList(data);
	}

	useEffect(() => {
		getGameList();
	}, []);

	const showModal = (gameName) => {
		const newModalTitle = `Check ${gameName}'s username`;
		setModalTitle(newModalTitle)
		setIsModalVisible(true);
	}

	const hideModal = () => {
		setIsModalVisible(false);
	}

	return { 
		dataList,
		modalTitle,
		isModalVisible, 
		onSearch,
		showModal, hideModal 
	};
}