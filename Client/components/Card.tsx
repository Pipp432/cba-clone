import { cardType } from "../types";

const Card = (props: cardType) => {
	return (
		<div className='bg-white shadow-lg w-[70rem] h-auto rounded-lg p-2 border-2 my-2 border-slate-100'>
			{props.children}
		</div>
	);
};
export default Card;
