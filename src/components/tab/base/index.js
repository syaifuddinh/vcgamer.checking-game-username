"use client";

import { useState } from "react";
import "@/assets/css/components/tab/base.scss"; 

export default function BaseTab({ tabs }) {
	const [activeTab, setActiveTab] = useState(() => {
		const val = tabs.length > 0 ? tabs[0].id : "";

		return val;
	});

	const onActiveTabChange = newActiveTab => {
		setActiveTab(newActiveTab);
	}

	return (
		<div className="base-tab">
			{ tabs.map(item => (
				<div
					key={item.id} 
					className={`base-tab_item ${activeTab === item.id ? "active" : ""}`}
					onClick={() => onActiveTabChange(item.id)}
				>
					{ item.label }
				</div>
			)) }
		</div>
	)
}