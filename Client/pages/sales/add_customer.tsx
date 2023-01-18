import { text } from "stream/consumers";
import Card from "../../components/Card";
import FormInput from "../../components/FormInput";
import FormSelect from "../../components/FormSelect";
import {
	defaultFormInputStyle,
	defaultFormTextareaStyle,
	defualtFormSelectStyle,
} from "../../styles/styles";
const inputStyle = defaultFormInputStyle;
const selectStyle = defualtFormSelectStyle;
const textareaStyle = defaultFormTextareaStyle;
const add_customer = () => {
	return (
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
						colSpan='col-span-2'
						selectStyle={selectStyle}
						options={["คำนำหน้าชื่อ", "นาย", "นาง", "นางสาว"]}
					/>
					<FormInput
						colSpan='col-span-3'
						inputStyle={inputStyle}
						placeholder='ชื่อ'
					/>
					<FormInput
						colSpan='col-span-3'
						inputStyle={inputStyle}
						placeholder='นามสกุล'
					/>
					<FormInput
						colSpan='col-span-1'
						inputStyle={inputStyle}
						placeholder='ชื่อเล่น'
					/>
					<FormInput
						colSpan='col-span-3'
						inputStyle={inputStyle}
						title='เลขประจำตัวบัตรประชาชน'
						placeholder='เลขประจำตัวบัตรประชาชน'
					/>
					<FormInput
						colSpan='col-span-3'
						inputStyle={inputStyle}
						title='เบอร์โทรศัพท์มือถือ'
						placeholder='เบอร์โทรศัพท์มือถือ'
					/>
					<FormInput
						colSpan='col-span-3'
						inputStyle={inputStyle}
						title='อีเมล์'
						placeholder='อีเมล์'
					/>
					<FormInput
						colSpan='col-span-9'
						type='textarea'
						inputStyle={textareaStyle}
						title='ที่อยู่สำหรับจัดส่งสินค้า'
						placeholder='เลขที่, หมู่ที่, อาคาร, หมู่บ้าน, ถนน, ตำบล/แขวง, อำเภอ/เขต '
					/>
					<FormSelect
						colSpan='col-span-5'
						selectStyle={selectStyle}
						options={["เลือกจังหวัด"]}
					/>
					<FormInput
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
				<button className='text-white rounded-lg bg-sky-400 h-10 w-full mt-4 hover:bg-sky-600'>
					เพิ่มข้อมูลลูกค้า
				</button>
			</Card>
		</div>
	);
};
export default add_customer;
