import React from "react";

const ZenMindTraining = () => {
	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>
				Zen Mind Training
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<div className='h-32 bg-[#004A99] rounded-t-lg flex items-center justify-center'>
						<span className='text-white text-xl'>Meditation</span>
					</div>
					<div className='p-4'>
						<h3 className='text-[#C1272D] font-semibold'>Focus Enhancement</h3>
						<p className='text-[#012D5A] mt-2'>Daily meditation sessions</p>
						<button className='mt-4 bg-[#E6A800] hover:bg-[#F2C94C] text-white px-4 py-2 rounded transition duration-300'>
							Start Session
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ZenMindTraining;
