import Input from "../components/Input";
import { FormEvent, useEffect, useState } from "react";
import Cookie from "js-cookie";
import { generateErrorModal } from "../utils/functions";
import { loginErrorMsg } from "../data/department/login/errorMsg";

const Login = () => {
	const [ID, setID] = useState("");
	const [password, setPassword] = useState("");

	const [openErrorModal, setOpenErrorModal] = useState(false);
	useEffect(() => {
		if (Cookie.get("ID")) Cookie.remove("ID");
	}, []);
	const modalToggler = () => {
		setOpenErrorModal(!openErrorModal);
	};

	const onChangeIDHandler = (event: FormEvent<HTMLInputElement>) => {
		setID(event.currentTarget.value.toLocaleUpperCase());
	};
	const onChangePasswordHandler = (event: FormEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	};
	const getData = async (ID: string, password: string) => {
		const result = await fetch(
			`http://localhost:3000/api/fetchEmployee/${ID}?password=${password}`,
			{
				method: "GET",
				headers: { contentType: "text/plain" },
			}
		);
		const data = await result.json();
		return data;
	};
	const onLoginHandler = () => {
		getData(ID, password).then((data) => {
			if (data[0]) {
				Cookie.set("ID", data[0].ID as string);

				window.location.href = `/main/${data[0].ID}`;
			} else {
				modalToggler();
			}
		});
	};

	return (
		<>
			{openErrorModal &&
				generateErrorModal(loginErrorMsg.userNotFound, modalToggler)}
			<div className='flex w-[30rem] flex-col text-3xl text-black items-center absolute top-32 left-[35%] gap-10'>
				<div className=''>
					<img
						src='https://uaterp.cbachula.com/public/img/cba-logo.png'
						alt='CBA_logo'
						height={"200px"}
					/>
				</div>
				<div className=''>เข้าสู่ระบบ</div>
				<div className='flex flex-col items-center gap-4 text-base'>
					<Input
						placeholder='รหัสพนักงาน'
						onChangeHandler={onChangeIDHandler}
					/>
					<Input
						placeholder='รหัสผ่าน'
						type='password'
						onChangeHandler={onChangePasswordHandler}
					/>
					<button
						className='bg-blue-300 rounded-xl px-28 py-2 hover:bg-blue-500'
						onClick={onLoginHandler}
					>
						เข้าสู่ระบบ
					</button>
				</div>
			</div>
		</>
	);
};
export default Login;
