import React, { useState } from "react";

const CourseLibrary = () => {
	const [showPopup, setShowPopup] = useState(false);

	// Dummy course data
	const courses = [
		{
			id: 1,
			title: "Physics Masterclass",
			description:
				"Complete Physics course covering mechanics, thermodynamics, and modern physics",
			image: "physics.jpg",
			duration: "6 months",
			topics: "Mechanics, Thermodynamics, Modern Physics",
		},
		{
			id: 2,
			title: "Chemistry Foundation",
			description:
				"Comprehensive chemistry course covering organic, inorganic, and physical chemistry",
			image: "chemistry.jpg",
			duration: "6 months",
			topics: "Organic, Inorganic, Physical Chemistry",
		},
		{
			id: 3,
			title: "Mathematics Excellence",
			description:
				"Advanced mathematics covering algebra, calculus, and trigonometry",
			image: "math.jpg",
			duration: "8 months",
			topics: "Algebra, Calculus, Trigonometry",
		},
	];

	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<h1 className='text-2xl font-bold mb-4 text-[#012D5A]'>Course Library</h1>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{courses.map((course) => (
					<div
						key={course.id}
						className='bg-white rounded-lg shadow-md overflow-hidden'
					>
						<div className='h-48 bg-[#004A99] flex items-center justify-center'>
							<h3 className='text-white text-xl font-semibold'>
								{course.title}
							</h3>
						</div>
						<div className='p-4'>
							<h3 className='text-[#C1272D] font-semibold'>{course.title}</h3>
							<p className='text-[#012D5A] mt-2'>{course.description}</p>
							<div className='mt-2'>
								<p className='text-sm text-[#004A99]'>
									Duration: {course.duration}
								</p>
								<p className='text-sm text-[#004A99]'>
									Topics: {course.topics}
								</p>
							</div>
							<button
								onClick={() => setShowPopup(true)}
								className='mt-4 bg-[#E6A800] hover:bg-[#F2C94C] text-white px-4 py-2 rounded transition duration-300'
							>
								Enroll Now
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Enrollment Popup */}
			{showPopup && (
				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
					<div className='bg-white p-6 rounded-lg shadow-xl max-w-md'>
						<h2 className='text-xl font-bold text-[#012D5A] mb-4'>
							Thank You for Your Interest!
						</h2>
						<p className='text-[#004A99] mb-4'>
							Our team will contact you shortly to complete your enrollment
							process.
						</p>
						<button
							onClick={() => setShowPopup(false)}
							className='bg-[#C1272D] hover:bg-[#9B1C23] text-white px-4 py-2 rounded transition duration-300'
						>
							Close
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default CourseLibrary;
