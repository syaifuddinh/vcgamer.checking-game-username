import Table from "@/components/table";
import StatusBadge from "@/components/status-badge";
import ButtonBar from "./button-bar";

const columns = [
	{
		"label": "Fullname"
	},
	{
		"label": "Email"
	},
	{
		"label": "Transaction Amount"
	},
	{
		"label": "Status"
	},
	{
		"label": ""
	}
];

const values = [
	[
		"Didin", 
		"didin@gmail.com", 
		23, 
		<StatusBadge label="active" variant="success" />, 
		<ButtonBar isShowActivatingButton={true} />
	],
	[
		"Ruri", 
		"ruri@gmail.com", 
		323, 
		<StatusBadge label="inactive" variant="danger" />,  
		<ButtonBar isShowDeactivatingButton={true} />
	]
];

export default function UserTable() {
	return (
		<>
			<Table
				columns={columns}
				values={values}
			/>
		</>
	)
}
