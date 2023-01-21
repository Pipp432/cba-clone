import { FormEvent, useState } from "react";
import { salesOrderError } from "../data/department/sales/errorMsg";
export const useSalseOrder = () => {
	const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
	const [openProductPanel, setOpenProductPanel] = useState(false);
	const [employeeFullname, setEmployeeFullname] = useState("");
	const [customerFullname, setCustomerFullname] = useState("");
	const [customerAddress, setCustomerAddress] = useState("");
	const [openModal, setOpenModal] = useState(false);
	const [avaliableCompanies, setAvaliableCompanies] = useState([]);
	const [modalErrorText, setModalErrorText] = useState({});
	const [products, setProducts] = useState([]);
	const submitSalesCustomerHandler = () => {
		setOpenProductPanel(true);
		setDisableSubmitBtn(true);
	};
	const fetchAllProductsInCompany = async (company_id: string) => {
		const response = await fetch(
			`http://localhost:3000/api/fetchProduct/fetchProductById?company_id=${company_id}`,
			{
				method: "GET",
				headers: {},
			}
		);
		const result = response.json();
		return result;
	};
	const fetchEmployee = async (id: string) => {
		const response = await fetch(
			`http://localhost:3000/api/fetchEmployee/${id}`,
			{
				method: "GET",
				headers: {},
			}
		);
		const result = response.json();
		return result;
	};
	const fetchCompaniesInProductLine = async (id: string) => {
		const response = await fetch(
			`http://localhost:3000/api/fetchCompany/${id}`,
			{
				method: "GET",
				headers: {},
			}
		);
		const result = response.json();
		return result;
	};
	const fetchCustomer = async (no: string) => {
		const response = await fetch(
			`http://localhost:3000/api/fetchCustomer/${no}`,
			{
				method: "GET",
				headers: {},
			}
		);
		const result = response.json();
		return result;
	};
	const toggleModal = () => {
		setOpenModal(!openModal);
	};
	const queryEmployeeIdHandler = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 5) {
			fetchEmployee(event.currentTarget.value.toLocaleUpperCase()).then(
				(fullnameObj) => {
					if (fullnameObj[0]) {
						const fullname =
							fullnameObj[0].Firstname + " " + fullnameObj[0].Surname;
						setEmployeeFullname(fullname);
					} else {
						setEmployeeFullname("");
						setModalErrorText(salesOrderError.userNotFound);
						toggleModal();
					}
				}
			);
			fetchCompaniesInProductLine(
				event.currentTarget.value.toLocaleUpperCase()
			).then((data) => {
				console.log(data);
				setAvaliableCompanies(data);
			});
		}
	};
	const queryCustomerHandler = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 10) {
			fetchCustomer(event.currentTarget.value).then((obj) => {
				if (obj[0]) {
					const fullname = obj[0].Firstname + " " + obj[0].Surname;
					setCustomerFullname(fullname);
					setCustomerAddress(obj[0].Address);
				} else {
					setCustomerFullname("");
					setCustomerAddress("");
					setModalErrorText(salesOrderError.customerNotFound);
					toggleModal();
				}
			});
		}
	};

	return {
		states: {
			disableSubmitBtn,
			openProductPanel,
			employeeFullname,
			customerAddress,
			customerFullname,
			avaliableCompanies,
			openModal,
			modalErrorText,
			products,
		},
		handlers: {
			submitSalesCustomerHandler,
			queryEmployeeIdHandler,
			queryCustomerHandler,
			toggleModal,
			fetchAllProductsInCompany,
			setProducts,
		},
	};
};
