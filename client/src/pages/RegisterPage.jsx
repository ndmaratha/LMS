import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		phone: "",
		dateOfBirth: "",
		grade: "",
		school: "",
		parentName: "",
		parentPhone: "",
		address: "",
		targetExam: "",
		previousScore: "",
		subjects: [],
	});

	const targetExamOptions = [
		"JEE Main",
		"JEE Advanced",
		"NEET",
		"BITSAT",
		"Board Exams",
		"Other",
	];

	const subjectOptions = [
		"Physics",
		"Chemistry",
		"Mathematics",
		"Biology",
		"English",
	];
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		if (type === "checkbox") {
			const updatedSubjects = checked
				? [...formData.subjects, value]
				: formData.subjects.filter((subject) => subject !== value);
			setFormData((prev) => ({
				...prev,
				subjects: updatedSubjects,
			}));
		} else {
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Student Registration Data:", formData);
		navigate("/login");
	};

	return (
		<div className='min-h-screen bg-[#FFFFFF] py-12 px-4'>
			<div className='max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl border-2 border-[#E6A800]'>
				<h2 className='text-3xl font-bold text-center text-[#012D5A] mb-8'>
					Student Registration
				</h2>

				<form onSubmit={handleSubmit} className='space-y-6'>
					{/* Personal Information Section */}
					<div className='bg-[#F2C94C] bg-opacity-10 p-6 rounded-lg'>
						<h3 className='text-xl font-semibold text-[#004A99] mb-4'>
							Personal Information
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='text-[#012D5A] block mb-1'>Full Name*</label>
								<input
									type='text'
									name='name'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.name}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>
									Date of Birth*
								</label>
								<input
									type='date'
									name='dateOfBirth'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.dateOfBirth}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>
									Email Address*
								</label>
								<input
									type='email'
									name='email'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.email}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>
									Phone Number*
								</label>
								<input
									type='tel'
									name='phone'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.phone}
									onChange={handleChange}
								/>
							</div>
						</div>
					</div>

					{/* Academic Information Section */}
					<div className='bg-[#004A99] bg-opacity-5 p-6 rounded-lg'>
						<h3 className='text-xl font-semibold text-[#004A99] mb-4'>
							Academic Information
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='text-[#012D5A] block mb-1'>
									Current Grade/Class*
								</label>
								<select
									name='grade'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.grade}
									onChange={handleChange}
								>
									<option value=''>Select Grade</option>
									{[9, 10, 11, 12].map((grade) => (
										<option key={grade} value={grade}>
											Grade {grade}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>
									School Name*
								</label>
								<input
									type='text'
									name='school'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.school}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>Target Exam</label>
								<select
									name='targetExam'
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.targetExam}
									onChange={handleChange}
								>
									<option value=''>Select Target Exam</option>
									{targetExamOptions.map((exam) => (
										<option key={exam} value={exam}>
											{exam}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>
									Previous Score (%)
								</label>
								<input
									type='number'
									name='previousScore'
									min='0'
									max='100'
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.previousScore}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div className='mt-4'>
							<label className='text-[#012D5A] block mb-2'>
								Subjects of Interest
							</label>
							<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
								{subjectOptions.map((subject) => (
									<label key={subject} className='flex items-center space-x-2'>
										<input
											type='checkbox'
											name='subjects'
											value={subject}
											checked={formData.subjects.includes(subject)}
											onChange={handleChange}
											className='form-checkbox text-[#E6A800]'
										/>
										<span className='text-[#012D5A]'>{subject}</span>
									</label>
								))}
							</div>
						</div>
					</div>

					{/* Parent/Guardian Information */}
					<div className='bg-[#C1272D] bg-opacity-5 p-6 rounded-lg'>
						<h3 className='text-xl font-semibold text-[#004A99] mb-4'>
							Parent/Guardian Information
						</h3>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
							<div>
								<label className='text-[#012D5A] block mb-1'>
									Parent/Guardian Name*
								</label>
								<input
									type='text'
									name='parentName'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.parentName}
									onChange={handleChange}
								/>
							</div>

							<div>
								<label className='text-[#012D5A] block mb-1'>
									Parent/Guardian Phone*
								</label>
								<input
									type='tel'
									name='parentPhone'
									required
									className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
									value={formData.parentPhone}
									onChange={handleChange}
								/>
							</div>
						</div>
					</div>

					{/* Address Section */}
					<div className='bg-[#E6A800] bg-opacity-5 p-6 rounded-lg'>
						<h3 className='text-xl font-semibold text-[#004A99] mb-4'>
							Address
						</h3>
						<div>
							<label className='text-[#012D5A] block mb-1'>
								Complete Address*
							</label>
							<textarea
								name='address'
								required
								rows='3'
								className='w-full px-3 py-2 border rounded-md focus:ring-[#F2C94C] focus:border-[#F2C94C]'
								value={formData.address}
								onChange={handleChange}
							></textarea>
						</div>
					</div>

					{/* Submit Button */}
					<div className='flex justify-center'>
						<button
							type='submit'
							className='px-8 py-3 bg-[#C1272D] hover:bg-[#9B1C23] text-white rounded-md transition duration-300 font-semibold'
						>
							Complete Registration
						</button>
					</div>
				</form>

				<div className='mt-6 text-center'>
					<p className='text-[#012D5A]'>
						Already have an account?{" "}
						<Link
							to='/login'
							className='text-[#004A99] hover:text-[#C1272D] font-medium'
						>
							Sign in
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
};

export default RegisterPage;
