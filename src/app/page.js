import DefaultLayout from "@/layouts/default";
import SummaryCard from "./summary-card";
import "@/assets/css/pages/dashboard/base.scss";

export default function Home() {
	return (
		<DefaultLayout>
			<div className="default-layout_title">
				Dashboard
			</div>		

			<div className="dashboard default-layout_our-content">
				<div className="dashboard_1st-row">
					<SummaryCard
						amount={199}
						description="transaction is done"
						variant="default"
					/>
					<SummaryCard
						amount={150}
						description="transaction is success"
						variant="success"
					/>
					<SummaryCard
						amount={49}
						description="transaction is fail"
						variant="fail"
					/>
				</div>
			</div>
		</DefaultLayout>
	)
}
