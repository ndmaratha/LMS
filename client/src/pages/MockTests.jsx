import React, { useState } from "react";

const MockTests = () => {
	const [selectedSubject, setSelectedSubject] = useState("all");

	// Dummy data for mock tests
	const mockTests = [
		{
			id: 1,
			title: "Physics Weekly Test",
			subject: "physics",
			duration: "3 hours",
			totalMarks: 100,
			questions: 50,
			difficulty: "Medium",
			date: "2025-03-01",
			timeSlot: "10:00 AM - 1:00 PM",
		},
		{
			id: 2,
			title: "Chemistry Monthly Test",
			subject: "chemistry",
			duration: "3 hours",
			totalMarks: 100,
			questions: 45,
			difficulty: "Hard",
			date: "2025-03-05",
			timeSlot: "2:00 PM - 5:00 PM",
		},
		{
			id: 3,
			title: "Mathematics Practice Test",
			subject: "mathematics",
			duration: "2 hours",
			totalMarks: 75,
			questions: 30,
			difficulty: "Easy",
			date: "2025-03-03",
			timeSlot: "9:00 AM - 11:00 AM",
		},
	];

	const subjects = ["all", "physics", "chemistry", "mathematics"];

	const filteredTests =
		selectedSubject === "all"
			? mockTests
			: mockTests.filter((test) => test.subject === selectedSubject);

	return (
		<div className='p-6 bg-[#FFFFFF]'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-bold text-[#012D5A]'>Mock Tests</h1>

				{/* Subject Filter */}
				<div className='flex items-center space-x-4'>
					<span className='text-[#004A99]'>Filter by Subject:</span>
					<select
						value={selectedSubject}
						onChange={(e) => setSelectedSubject(e.target.value)}
						className='border rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#E6A800]'
					>
						{subjects.map((subject) => (
							<option key={subject} value={subject}>
								{subject.charAt(0).toUpperCase() + subject.slice(1)}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredTests.map((test) => (
					<div
						key={test.id}
						className='bg-white rounded-lg shadow-md p-6 border-t-4 border-[#E6A800] hover:shadow-lg transition-shadow'
					>
						<h2 className='text-[#004A99] font-semibold text-lg'>
							{test.title}
						</h2>
						<div className='mt-4 space-y-2'>
							<p className='text-[#012D5A]'>
								<span className='font-medium'>Duration:</span> {test.duration}
							</p>
							<p className='text-[#012D5A]'>
								<span className='font-medium'>Total Marks:</span>{" "}
								<span className='text-[#C1272D]'>{test.totalMarks}</span>
							</p>
							<p className='text-[#012D5A]'>
								<span className='font-medium'>Questions:</span> {test.questions}
							</p>
							<p className='text-[#012D5A]'>
								<span className='font-medium'>Difficulty:</span>{" "}
								<span
									className={`
                  ${test.difficulty === "Easy" && "text-green-600"}
                  ${test.difficulty === "Medium" && "text-[#E6A800]"}
                  ${test.difficulty === "Hard" && "text-[#C1272D]"}
                `}
								>
									{test.difficulty}
								</span>
							</p>
							<p className='text-[#012D5A]'>
								<span className='font-medium'>Date:</span> {test.date}
							</p>
							<p className='text-[#012D5A]'>
								<span className='font-medium'>Time:</span> {test.timeSlot}
							</p>
						</div>
						<div className='mt-6 flex justify-between items-center'>
							<button className='bg-[#E6A800] hover:bg-[#F2C94C] text-white px-6 py-2 rounded transition duration-300'>
								Start Test
							</button>
							<button className='text-[#004A99] hover:text-[#C1272D] transition duration-300'>
								View Syllabus
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default MockTests;
