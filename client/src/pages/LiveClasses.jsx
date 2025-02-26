import React from "react";

const LiveClasses = () => {
	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>Live Classes</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-white rounded-lg shadow-md p-6 border-l-4 border-[#C1272D]'>
					<h2 className='text-[#004A99] font-semibold text-xl'>
						Upcoming Classes
					</h2>
					<div className='mt-4 space-y-4'>
						<div className='p-4 bg-white rounded border border-[#E6A800]'>
							<h3 className='text-[#C1272D]'>Mathematics</h3>
							<p className='text-[#012D5A]'>10:00 AM - 11:30 AM</p>
							<button className='mt-2 bg-[#E6A800] hover:bg-[#F2C94C] text-white px-4 py-2 rounded transition duration-300'>
								Join Class
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LiveClasses;
