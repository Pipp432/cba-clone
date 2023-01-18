import DepartmentSection from "../../components/DepartmentSection";
import Hello from "../../components/Hello";
import Navbar from "../../components/Navbar";
import ProgressBar from "../../components/ProgressBar";
export default function Home() {
	return (
		<>
			<Hello />
			<div className='mx-52'>
				<div className='flex flex-col align-middle items-left'>
					<ProgressBar />
					<DepartmentSection name='General Manager & Sales and Marketing Director' />
				</div>
			</div>
		</>
	);
}
