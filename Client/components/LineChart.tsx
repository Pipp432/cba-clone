import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ chartData }: any) {
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>Chart</h2>
			<Line
				data={chartData}
				options={{
					plugins: {
						title: {
							display: true,
							text: "Number of sales from May-August 2023",
						},
						legend: {
							display: false,
						},
					},
				}}
			/>
		</div>
	);
}
export default LineChart;
