import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");

		try {
			// Add your authentication logic here
			// For now, we'll just simulate a successful login
			if (formData.email && formData.password) {
				// Navigate to dashboard on successful login
				navigate("/dashboard/courses");
			} else {
				setError("Please fill in all fields");
			}
		} catch (err) {
			setError("Invalid email or password");
		}
	};

	return (
		<div className='min-h-screen flex items-center justify-center bg-[#FFFFFF]'>
			<div className='p-8 rounded-lg shadow-xl bg-white border-2 border-[#E6A800] w-full max-w-md'>
				<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>Login</h1>
				{error && (
					<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4'>
						{error}
					</div>
				)}
				<form className='space-y-4' onSubmit={handleSubmit}>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						className='w-full p-2 border rounded focus:border-[#F2C94C] outline-none'
						required
					/>
					<input
						type='password'
						name='password'
						placeholder='Password'
						value={formData.password}
						onChange={handleChange}
						className='w-full p-2 border rounded focus:border-[#F2C94C] outline-none'
						required
					/>
					<button
						type='submit'
						className='w-full bg-[#C1272D] hover:bg-[#9B1C23] text-white py-2 px-4 rounded transition duration-300'
					>
						Sign In
					</button>
				</form>
				<div className='mt-4 text-center'>
					<Link
						to='/register'
						className='text-[#004A99] hover:text-[#C1272D] text-sm'
					>
						Don't have an account? Register here
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
