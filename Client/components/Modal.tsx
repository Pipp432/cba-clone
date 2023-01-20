import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ModalType } from "../types";

function Modal(props: ModalType) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => {
		setIsBrowser(true);
	}, []);

	if (isBrowser) {
		return ReactDOM.createPortal(
			<div className=' justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-slate-400 bg-opacity-50 animate-fade-in '>
				<div className='bg-slate-50 shadow-lg rounded-lg w-[30rem] h-42 animate-fade-in delay-200'>
					<div className='text-3xl m-4'>{props.title}</div>
					<hr className='w-full bg-black' />
					<div className='text-xl text-black p-4 h-[65%]'>{props.content}</div>
					<hr />
					<div className='flex flex-row-reverse p-4'>
						<button
							className='bg-slate-400 p-2 rounded-lg w-16 hover:bg-slate-300'
							onClick={props.toggler}
						>
							ปิด
						</button>
					</div>
				</div>
			</div>,

			document.getElementById("modal-root") as Element
		);
	} else {
		return null;
	}
}

export default Modal;
