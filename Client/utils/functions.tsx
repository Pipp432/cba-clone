import Modal from "../components/Modal";
export const generateErrorModal = (data: any, handler: any) => {
	return (
		<Modal title={data?.title} content={data?.content} toggler={handler} />
	);
};
