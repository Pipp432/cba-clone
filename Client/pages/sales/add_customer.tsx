import { text } from "stream/consumers";
import React from "react";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import {
	defaultFormInputStyle,
	defaultFormTextareaStyle,
	defualtFormSelectStyle,
} from "../../styles/styles";
import { thaiProvince } from "../../data/thaiProvince";
import Modal from "../../components/Modal";
import { useState } from "react";
const inputStyle = defaultFormInputStyle;
const selectStyle = defualtFormSelectStyle;
const textareaStyle = defaultFormTextareaStyle;
const formsIds: Array<string> = [
	"prefix",
	"firstname",
	"lastname",
	"nickname",
	"address",
	"province",
	"zipcode",
	"phoneNumber",
	"email",
	"citizenId",
];

const add_customer = () => {
	const [openModal, setOpenModal] = useState(false);
	const modalToggler = () => {
		setOpenModal(!openModal);
	};
	const onSubmitHandler = async (event: any) => {
		event.preventDefault();
		const data: any = {};
		formsIds.forEach((form: string) => {
			if (eval(`event.target.${form}?.value`) === "") {
				console.log("error");
			}
			data[`${form}`] = eval(`event.target.${form}?.value`);
		});
		data["database"] = "Customers";
		const JSONdata = JSON.stringify(data);
		const option: any = {
			method: "POST",
			// Tell the server we're sending JSON.
			headers: {
				"Content-Type": "application/json",
			},
			// Body of the request is the JSON data we created above.
			body: JSONdata,
		};
		const response = await fetch("http://localhost:3000/api/form", option);
		const result = await response.json();

		console.log(result);
		if (result) {
			modalToggler();
			// setTimeout(() => {
			// 	window.location.href = "http://localhost:3000/";
			// }, 1000);
		}
	};
	return (
		<>
			{openModal && (
				<Modal
					title='Added customer to database'
					content='เพิ่มลูกค้าสำเร็จ กำลังกลับสู่หน้าหลัก'
					toggler={modalToggler}
				/>
			)}
			<form onSubmit={onSubmitHandler}>
				<div className='flex flex-col ml-40'>
					<div className='text-3xl text-black my-6 font-bold'>
						เพิ่มข้อมูลลูกค้า / Add Customer
					</div>
					<Card>
						<div className='grid grid-cols-9 m-4 gap-4'>
							<div className='text-xl col-span-8 text-black'>
								ชื่อ-นามสกุล (ภาษาไทย)
							</div>
							<FormSelect
								id='prefix'
								colSpan='col-span-2'
								selectStyle={selectStyle}
								options={["คำนำหน้าชื่อ", "นาย", "นาง", "นางสาว"]}
							/>
							<FormInput
								id='firstname'
								colSpan='col-span-3'
								inputStyle={inputStyle}
								placeholder='ชื่อ'
							/>
							<FormInput
								id='lastname'
								colSpan='col-span-3'
								inputStyle={inputStyle}
								placeholder='นามสกุล'
							/>
							<FormInput
								id='nickname'
								colSpan='col-span-1'
								inputStyle={inputStyle}
								placeholder='ชื่อเล่น'
							/>
							<FormInput
								id='citizenId'
								colSpan='col-span-3'
								inputStyle={inputStyle}
								title='เลขประจำตัวบัตรประชาชน'
								placeholder='เลขประจำตัวบัตรประชาชน'
							/>
							<FormInput
								id='phoneNumber'
								colSpan='col-span-3'
								inputStyle={inputStyle}
								title='เบอร์โทรศัพท์มือถือ'
								placeholder='เบอร์โทรศัพท์มือถือ'
							/>
							<FormInput
								id='email'
								colSpan='col-span-3'
								inputStyle={inputStyle}
								title='อีเมล์'
								placeholder='อีเมล์'
							/>
							<FormInput
								id='address'
								colSpan='col-span-9'
								type='textarea'
								inputStyle={textareaStyle}
								title='ที่อยู่สำหรับจัดส่งสินค้า'
								placeholder='เลขที่, หมู่ที่, อาคาร, หมู่บ้าน, ถนน, ตำบล/แขวง, อำเภอ/เขต '
							/>
							<FormSelect
								id='province'
								colSpan='col-span-5'
								selectStyle={selectStyle}
								options={["เลือกจังหวัด", ...thaiProvince]}
							/>
							<FormInput
								id='zipcode'
								colSpan='col-span-4'
								inputStyle={inputStyle}
								placeholder='รหัสไปรษณีย์'
							/>
						</div>
					</Card>
					<Card>
						<div className='text-xl font-bold'>
							กรุณาตรวจสอบข้อมูลว่าถูกต้องหรือไม่ก่อนกดยืนยันการเพิ่มข้อมูลลูกค้า
						</div>
						<button
							className='text-white rounded-lg bg-sky-400 h-10 w-full mt-4 hover:bg-sky-600'
							type='submit'
						>
							เพิ่มข้อมูลลูกค้า
						</button>
					</Card>
				</div>
			</form>
		</>
	);
};
export default add_customer;
