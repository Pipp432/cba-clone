import Input from "../components/Input";
import { FormEvent, useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";

const Login = () => {
	const [ID, setID] = useState("");
	const [password, setPassword] = useState("");
	const [userFound, setUserFound] = useState(true);
	const { dispatch } = useContext(GlobalContext);
	const onChangeIDHandler = (event: FormEvent<HTMLInputElement>) => {
		setID(event.currentTarget.value.toLocaleUpperCase());
		setUserFound(true);
	};
	const onChangePasswordHandler = (event: FormEvent<HTMLInputElement>) => {
		setPassword(event.currentTarget.value);
	};
	const onLoginHandler = () => {
		fetch(`http://localhost:8000/login?ID=${ID}&password=${password}`, {
			method: "GET",
			headers: { contentType: "text/plain" },
		})
			.then((result) => {
				if (result) {
					dispatch({ type: "login", payload: ID });
					window.location.href = "http://localhost:3000/";
					setUserFound(true);
				} else {
					setUserFound(false);
					console.log("FUCK");
				}
			})
			.catch(() => {
				setUserFound(false);
			});
	};

	return (
		<>
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
					{!userFound && <div className='text-red-500'>User not found</div>}
				</div>
			</div>
		</>
	);
};
export default Login;
