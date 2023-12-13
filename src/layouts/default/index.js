"use client";

import "@/assets/css/layouts/default/index.scss";
import HeaderBar from "./header-bar";
import Sidebar from "./sidebar";
import { Provider } from 'react-redux';
import store from '@/store/index.js';
import { useSelector, useDispatch } from 'react-redux';

const ReduxWrapper = (Component) => {
	return ({...props}) => (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	)
}

const DefaultLayout = ({ children }) => {
	const isSidebarVisible = useSelector(state => state.isSidebarVisible);

	return (
		<div className={`default-layout ${isSidebarVisible === true ? "" : "sidebar-is-invisible"}`}>
			<header>
				<HeaderBar />
			</header>
			<main>
				<sidebar>
					<Sidebar />
				</sidebar>
				
				<div className="main-content">
					{ children }
				</div>
			</main>
		</div>
	)
}

export default ReduxWrapper(DefaultLayout);