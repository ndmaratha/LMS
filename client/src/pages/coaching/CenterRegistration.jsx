import React, { useState } from "react";

const CenterRegistration = () => {
	const [formData, setFormData] = useState({
		centerName: "",
		directorName: "",
		email: "",
		phone: "",
		address: "",
		establishedYear: "",
		specializations: [],
		facilities: [],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Registration data:", formData);
	};

	return (
		<div className='min-h-screen bg-[#FFFFFF] p-6'>
			<h1 className='text-2xl font-bold text-[#012D5A] mb-6'>
				Coaching Center Registration
			</h1>
			<div className='max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 border-t-4 border-[#E6A800]'>
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<label className='text-[#012D5A] block mb-1'>Center Name*</label>
							<input
								type='text'
								required
								className='w-full px-3 py-2 border rounded focus:ring-[#F2C94C] focus:border-[#F2C94C]'
								value={formData.centerName}
								onChange={(e) =>
									setFormData({ ...formData, centerName: e.target.value })
								}
							/>
						</div>
						<div>
							<label className='text-[#012D5A] block mb-1'>
								Director Name*
							</label>
							<input
								type='text'
								required
								className='w-full px-3 py-2 border rounded focus:ring-[#F2C94C] focus:border-[#F2C94C]'
								value={formData.directorName}
								onChange={(e) =>
									setFormData({ ...formData, directorName: e.target.value })
								}
							/>
						</div>
					</div>
					<button
						type='submit'
						className='w-full bg-[#C1272D] hover:bg-[#9B1C23] text-white py-2 rounded transition duration-300'
					>
						Register Center
					</button>
				</form>
			</div>
		</div>
	);
};

export default CenterRegistration;
