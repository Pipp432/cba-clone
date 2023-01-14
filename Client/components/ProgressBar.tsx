const ProgressBar = () => {
	return (
		<div className='w-[64rem] h-32 border-2 border-slate-300 mt-2  text-black text-xl font-bold '>
			<div className='flex flex-col gap-2 p-2'>
				<div>CBA สู้ ๆ CBA สู้ตาย CBA ไว้ลายสู้ตายสู้ ๆ</div>
				<div>
					<div className='w-[99%]  bg-gray-200 rounded h-4 dark:bg-gray-700'>
						<div className='bg-blue-600 h-4 rounded w-[45%]'></div>
					</div>
				</div>
				<div>Current sales: 15,882,951.28 &rarr; 25,117,048.72 to go!</div>
			</div>
		</div>
	);
};
export default ProgressBar;
