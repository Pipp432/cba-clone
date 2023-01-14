import { ChangeEventHandler, FormEvent, useState } from "react";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";

const sales_order = () => {
	const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
	const [openProductPanel, setOpenProductPanel] = useState(false);
	const [employeeFullname, setEmployeeFullname] = useState("");
	const [customerFullname, setCustomerFullname] = useState("");
	const [customerAddress, setCustomerAddress] = useState("");

	const inputStyle =
		"rounded-lg w-full border-slate-200 h-10 border-2 disabled:bg-slate-200 p-2 text-lg";
	const selectStyle =
		"rounded-lg bg-white border-slate-200 border-2 h-10 w-full p-2";
	const submitSalesCustomerHandler = () => {
		setOpenProductPanel(true);
		setDisableSubmitBtn(true);
	};
	const fetchEmployee = async (id: string) => {
		const response = await fetch(`http://localhost:8000/getName?ID=${id}`, {
			method: "GET",
			headers: {},
		});
		const result = response.json();
		return result;
	};
	const fetchCustomer = async (no: string) => {
		const response = await fetch(`http://localhost:8000/getCustomer?No=${no}`, {
			method: "GET",
			headers: {},
		});
		const result = response.json();
		return result;
	};
	const queryEmployeeIdHandler = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 5) {
			fetchEmployee(event.currentTarget.value.toLocaleUpperCase()).then(
				(fullnameObj) => {
					const fullname =
						fullnameObj[0].Firstname + " " + fullnameObj[0].Surname;
					setEmployeeFullname(fullname);
				}
			);
		}
	};
	const queryCustomerHandler = (event: FormEvent<HTMLInputElement>) => {
		if (event.currentTarget.value.length === 10) {
			fetchCustomer(event.currentTarget.value).then((obj) => {
				const fullname = obj[0].Firstname + " " + obj[0].Surname;
				setCustomerFullname(fullname);
				setCustomerAddress(obj[0].Address);
			});
		}
	};
	return (
		<div className='flex flex-col ml-40 '>
			<div className='text-3xl text-black my-6 font-bold'>
				ใบสั่งขาย / Sales Order (SO)
			</div>
			<Card>
				<div className='grid grid-cols-8 m-4 gap-4'>
					<FormInput
						colSpan='col-span-2'
						inputStyle={inputStyle}
						title='รหัสผู้ออกใบสั่งขาย'
						onChangeHandler={queryEmployeeIdHandler}
						disabled={openProductPanel}
					/>
					<FormInput
						colSpan='col-span-6'
						inputStyle={inputStyle}
						title='ชื่อผู้ออกใบสั่งขาย'
						disabled={true}
						value={employeeFullname}
					/>

					<hr className='w-full col-span-8' />
					<FormInput
						colSpan='col-span-2'
						inputStyle={inputStyle}
						title='เบอร์โทรศัพท์ลูกค้า'
						onChangeHandler={queryCustomerHandler}
						disabled={openProductPanel}
					/>

					<FormInput
						colSpan='col-span-6'
						inputStyle={inputStyle}
						title='ชื่อลูกค้า'
						disabled={true}
						value={customerFullname}
					/>

					<FormInput
						colSpan='col-span-8'
						inputStyle={inputStyle}
						title='ที่อยู่ลูกค้า'
						disabled={true}
						value={customerAddress}
					/>

					<hr className='w-full col-span-8' />

					<FormSelect
						colSpan='col-span-2'
						selectStyle={selectStyle}
						title='Supplier'
						options={["เลือก supplier"]}
					/>
					<FormSelect
						colSpan='col-span-2'
						selectStyle={selectStyle}
						title='ประเภทสินค้า'
						options={["เลือกประเภทสินค้า", "Stock", "Order", "Install"]}
					/>

					<button
						className='col-span-1 mt-8 rounded-lg bg-sky-400 h-10 text-white hover:bg-sky-600 disabled:bg-sky-200'
						onClick={submitSalesCustomerHandler}
						disabled={disableSubmitBtn}
					>
						ยืนยัน
					</button>
				</div>
			</Card>
			{openProductPanel && (
				<div className='mt-4'>
					<Card>
						<div className='grid grid-cols-8 m-4 gap-4'>
							<FormSelect
								colSpan='col-span-4'
								selectStyle={selectStyle}
								title='Catagory'
								options={["เลือก catagory"]}
							/>
							<FormInput
								colSpan='col-span-4'
								inputStyle={inputStyle}
								title='Product Number / Product Name'
							/>
						</div>
						<hr className='w-full col-span-8 ' />
						<table className='w-full mt-2'>
							<tr className='border-b-2'>
								<th className='p-4'>รหัสสินค้า</th>
								<th className='p-4'>ชื่อสินค้า</th>
								<th className='p-4'>หมวดหมู่</th>
								<th className='p-4'>ราคา</th>
							</tr>
							<tr className='border-b-2 '>
								<td className='p-4'>รหัสสินค้า</td>
								<td className='p-4'>ชื่อสินค้า</td>
								<td className='p-4'>หมวดหมู่</td>
								<td className='p-4'>ราคา</td>
							</tr>
							<tr className='border-b-2 '>
								<td className='p-4'>รหัสสินค้า</td>
								<td className='p-4'>ชื่อสินค้า</td>
								<td className='p-4'>หมวดหมู่</td>
								<td className='p-4'>ราคา</td>
							</tr>
							<tr className='border-b-2 hover:bg-slate-300 '>
								<td className='p-4'>รหัสสินค้า</td>
								<td className='p-4'>ชื่อสินค้า</td>
								<td className='p-4'>หมวดหมู่</td>
								<td className='p-4'>ราคา</td>
							</tr>
							<tr className='border-b-2 '>
								<td className='p-4'>รหัสสินค้า</td>
								<td className='p-4'>ชื่อสินค้า</td>
								<td className='p-4'>หมวดหมู่</td>
								<td className='p-4'>ราคา</td>
							</tr>
							<tr className='border-b-2 '>
								<td className='p-4'>รหัสสินค้า</td>
								<td className='p-4'>ชื่อสินค้า</td>
								<td className='p-4'>หมวดหมู่</td>
								<td className='p-4'>ราคา</td>
							</tr>
						</table>
					</Card>
					<Card>
						<div className='text-3xl'>รายละเอียดใบสั่งขาย</div>
						<div className='flex flex-col justify-center items-center'>
							<table className='my-1'>
								<tr>
									<th>ยังไม่ได้เพิ่มสินค้า</th>
								</tr>
							</table>
						</div>

						<button className='w-full rounded-lg bg-sky-400 text-white h-10 hover:bg-sky-600'>
							บันทึก SO
						</button>
					</Card>
				</div>
			)}
		</div>
	);
};
export default sales_order;
