import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import Modal from "../../components/Modal";
import { useSalseOrder } from "../../hooks/useSalesOrder";
import {
	defaultFormInputStyle,
	defualtFormSelectStyle,
} from "../../styles/styles";

const sales_order = () => {
	const { states, handlers } = useSalseOrder();

	const inputStyle = defaultFormInputStyle;
	const selectStyle = defualtFormSelectStyle;
	const avaliableCompanies = () => {
		let companies: Array<string> = ["เลือก supplier"];
		states.avaliableCompanies.forEach((e: any) => {
			companies.push(`${e.company_id} : ${e.name}`);
		});

		return companies;
	};

	return (
		<div className='flex flex-col ml-40 '>
			<div className='text-3xl text-black my-6 font-bold'>
				ใบสั่งขาย / Sales Order (SO)
			</div>
		{error	<Modal title='Error' content='No user' />}
			<Card>
				<div className='grid grid-cols-8 m-4 gap-4'>
					<FormInput
						colSpan='col-span-2'
						inputStyle={inputStyle}
						title='รหัสผู้ออกใบสั่งขาย'
						onChangeHandler={handlers.queryEmployeeIdHandler}
						disabled={states.openProductPanel}
					/>
					<FormInput
						colSpan='col-span-6'
						inputStyle={inputStyle}
						title='ชื่อผู้ออกใบสั่งขาย'
						disabled={true}
						value={states.employeeFullname}
					/>

					<hr className='w-full col-span-8' />
					<FormInput
						colSpan='col-span-2'
						inputStyle={inputStyle}
						title='เบอร์โทรศัพท์ลูกค้า'
						onChangeHandler={handlers.queryCustomerHandler}
						disabled={states.openProductPanel}
					/>

					<FormInput
						colSpan='col-span-6'
						inputStyle={inputStyle}
						title='ชื่อลูกค้า'
						disabled={true}
						value={states.customerFullname}
					/>

					<FormInput
						colSpan='col-span-8'
						inputStyle={inputStyle}
						title='ที่อยู่ลูกค้า'
						disabled={true}
						value={states.customerAddress}
					/>

					<hr className='w-full col-span-8' />

					<FormSelect
						colSpan='col-span-2'
						selectStyle={selectStyle}
						title='Supplier'
						options={[...avaliableCompanies()]}
						disabled={states.openProductPanel}
					/>
					<FormSelect
						colSpan='col-span-2'
						selectStyle={selectStyle}
						title='ประเภทสินค้า'
						options={["เลือกประเภทสินค้า", "Stock", "Order", "Install"]}
						disabled={states.openProductPanel}
					/>

					<button
						className='col-span-1 mt-8 rounded-lg bg-sky-400 h-10 text-white hover:bg-sky-600 disabled:bg-sky-200'
						onClick={handlers.submitSalesCustomerHandler}
						disabled={states.disableSubmitBtn}
					>
						ยืนยัน
					</button>
				</div>
			</Card>
			{states.openProductPanel && (
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
