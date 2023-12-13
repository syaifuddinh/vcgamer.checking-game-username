import DefaultLayout from "@/layouts/default";
import "@/assets/css/pages/checking-game-history/base.scss";
import TransactionTable from "./transaction-table/index.js";
import BaseTab from "@/components/tab/base/index.js";
import FilterBoard from "@/components/filter-board/index.js";
import SearchingInput from "@/components/input/searching/index.js";
import DateInput from "@/components/input/date/index.js";

const tabs = [
	{
		id: "all-transaction",
		label: "All Transaction",
		isDefault: true
	},
	{
		id: "success-transaction",
		label: "Success Transaction",
		isDefault: false
	},
	{
		id: "fail-transaction",
		label: "Fail Transaction",
		isDefault: false
	}
]

export default function CheckingGameHistory() {
	return (
		<DefaultLayout>
			<div className="default-layout_title">
				Checking Game History
			</div>		

			<div className="checking-game-history default-layout_our-content">
				<div className="checking-game-history_1st-row">
					<BaseTab
						tabs={tabs}
					/>

					<FilterBoard>
						<div className="default-layout_date-input-bar__title">
							Filter transaction by transaction date
						</div>
						<div className="checking-game-history_filter-bar">
							<div className="default-layout_date-input-bar">
								<div className="default-layout_date-input-bar__main">
									<DateInput />
									<DateInput />
								</div>
							</div>

							<SearchingInput
								placeholder="Search history by source"
							/>
						</div>
					</FilterBoard>
				</div>
				<div className="checking-game-history_2nd-row">
					<TransactionTable />
				</div>
			</div>
		</DefaultLayout>
	)
}
