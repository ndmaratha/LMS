import React from "react";

const DoubtForum = () => {
	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>Doubt Forum</h1>
			<div className='grid grid-cols-1 gap-6'>
				<div className='bg-white rounded-lg shadow-md p-6'>
					<button className='bg-[#C1272D] hover:bg-[#9B1C23] text-white px-4 py-2 rounded transition duration-300 mb-4'>
						Ask a Question
					</button>
					<div className='space-y-4'>
						<div className='p-4 border rounded hover:border-[#E6A800] transition duration-300'>
							<h3 className='text-[#004A99] font-semibold'>Question Title</h3>
							<p className='text-[#012D5A] mt-2'>Question description</p>
							<div className='mt-2 flex items-center space-x-2'>
								<span className='text-sm text-[#C1272D]'>3 answers</span>
								<span className='text-sm text-[#012D5A]'>Posted 2h ago</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DoubtForum;
