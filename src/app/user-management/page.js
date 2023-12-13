import DefaultLayout from "@/layouts/default";
import "@/assets/css/pages/user-management/base.scss";
import UserTable from "./user-table/index.js";
import BaseTab from "@/components/tab/base/index.js";
import FilterBoard from "@/components/filter-board";
import SearchingInput from "@/components/input/searching";

const tabs = [
	{
		id: "all-user",
		label: "All User",
		isDefault: true
	},
	{
		id: "active-user",
		label: "Active User",
		isDefault: false
	},
	{
		id: "inactive-user",
		label: "Inactive User",
		isDefault: false
	}
]

export default function UserManagement() {
	return (
		<DefaultLayout>
			<div className="default-layout_title">
				User Management
			</div>		

			<div className="user-management default-layout_our-content">
				<div className="user-management_1st-row">
					<BaseTab
						tabs={tabs}
					/>

					<FilterBoard>
						<SearchingInput
							placeholder="Search user by fullname or email"
						/>
					</FilterBoard>
				</div>
				<div className="user-management_2nd-row">
					<UserTable />
				</div>
			</div>
		</DefaultLayout>
	)
}
