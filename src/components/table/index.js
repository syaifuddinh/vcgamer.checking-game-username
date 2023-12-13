"use client";

import { useState } from "react";
import { useRef } from "react";
import "@/assets/css/components/table/base.scss";

export default function Table({ 
	columns,
	values,
}) {
	return (
		<>
			<table
				className="table"
				cellSpacing="0"
			>
				<thead>
					<tr>
						{ columns.map((item, index) => (
							<th key={index}>
								{ item.label }
							</th>
						)) }
					</tr>
				</thead>
				<tbody>
					{ values && values.length > 0 && values.map((items, index) => (
						<tr key={index}>
							 { items.map((item, subindex) => (
							 	<td ket={subindex}>
							 		{ item }
							 	</td>
							 )) }
						</tr>
					)) }
				</tbody>
			</table>
		</>
	)
}