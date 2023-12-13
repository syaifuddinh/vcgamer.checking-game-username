import Table from "@/components/table";
import StatusBadge from "@/components/status-badge";
import ViewDetailButton from "@/components/button/view-detail"
import ActivatingButton from "@/components/button/activating";
import DeactivatingButton from "@/components/button/deactivating";

export default function ButtonBar({
	isShowActivatingButton = false,
	isShowDeactivatingButton = false
}) {
	return (
		<div className="button-bar">
			<ViewDetailButton
				href="/"
			/>

			{ isShowActivatingButton === true && (
				<ActivatingButton />
			) }

			{ isShowDeactivatingButton === true && (
				<DeactivatingButton />
			) }
		</div>
	)
}
