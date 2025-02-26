import React from "react";

const Counselling = () => {
	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>Counselling</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-[#004A99] font-semibold'>Book a Session</h2>
					<form className='mt-4 space-y-4'>
						<input
							type='text'
							placeholder='Topic'
							className='w-full p-2 border rounded focus:border-[#F2C94C] outline-none'
						/>
						<textarea
							placeholder='Brief description'
							className='w-full p-2 border rounded focus:border-[#F2C94C] outline-none'
							rows='4'
						></textarea>
						<button className='bg-[#C1272D] hover:bg-[#9B1C23] text-white px-4 py-2 rounded transition duration-300'>
							Schedule Appointment
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Counselling;
