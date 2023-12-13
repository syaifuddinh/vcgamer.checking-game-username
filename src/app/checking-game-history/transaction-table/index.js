import Table from "@/components/table";
import StatusBadge from "@/components/status-badge";

const columns = [
	{
		"label": "Source"
	},
	{
		"label": "Game name"
	},
	{
		"label": "Checked Username / ID"
	},
	{
		"label": "Transaction Time"
	},
	{
		"label": "Status"
	}
];

const values = [
	[
		"didin@gmail.com", 
		"Mobile Legend",
		"12321321321",
		"2022-01-01", 
		<StatusBadge label="success" variant="success" />, 
	],
	[
		"ruri@gmail.com", 
		"PUBG",
		"12321321321",
		"2022-01-02",, 
		<StatusBadge label="fail" variant="danger" />,  
	]
];

export default function TransactionTable() {
	return (
		<>
			<Table
				columns={columns}
				values={values}
			/>
		</>
	)
}
