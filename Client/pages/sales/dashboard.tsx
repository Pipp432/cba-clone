import { useEffect, useState } from "react";
import { Data } from "../../data/chartData";
import LineChart from "../../components/LineChart";
import "chart.js/auto";
import Link from "next/link";
const dashboard = () => {
	const [loaded, setLoaded] = useState(false);
	const [chartData, setChartData] = useState({
		labels: Data.map((data) => data.year),
		datasets: [
			{
				label: "Number of sales ",
				data: Data.map((data) => data.userGain),
				backgroundColor: [
					"rgba(75,192,192,1)",
					"#ecf0f1",
					"#50AF95",
					"#f3ba2f",
					"#2a71d0",
				],
				borderColor: "black",
				borderWidth: 2,
			},
		],
	});
	useEffect(() => {
		setLoaded(true);
	}, []);

	if (loaded) {
		return (
			<div className='w-96'>
				<LineChart chartData={chartData} />
				<Link href='/'></Link>
			</div>
		);
	}
};
export default dashboard;
